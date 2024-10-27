import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as db from './Database';
import React, { useState } from "react";
import { enrollCourse, unenrollCourse } from './Enrollments/reducer';

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {

  const { currentUser } = useSelector((state) => state.accountReducer);
  const enrollments = useSelector((state) => state.enrollmentReducer.enrollments); // Old enrollments from your database
  const [showAllCourses, setShowAllCourses] = useState(false);
  const dispatch = useDispatch();

  // Determine which courses to display based on user role and state
  const displayedCourses = currentUser.role === "FACULTY"
    ? courses
    : showAllCourses
      ? courses
      : courses.filter((course) =>
        enrollments.some(
          (enrollment) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id
        )
      );

  const handleEnrollmentToggle = (courseId) => {
    const isEnrolled = enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id &&
        enrollment.course === courseId
    );

    if (isEnrolled) {
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
      console.log(`Unenrolled from course ${courseId}. Current enrollments:`, enrollments);
    } else {
      dispatch(enrollCourse({ userId: currentUser._id, courseId }));
      console.log(`Enrolled in course ${courseId}. Current enrollments:`, enrollments);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Enrollments button for Students */}
      {currentUser.role === "STUDENT" && (
        <button
          className="btn btn-info float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}

      {/* Faculty section */}
      {currentUser.role === "FACULTY" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}> Add </button>
            <button className="btn btn-warning float-end me-2"
              onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <input value={course.name} className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <textarea value={course.description} className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">{currentUser.role === "FACULTY" ? "Published Courses" : "Courses"} ({displayedCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((course) => (
            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link to={`/Kanbas/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark">
                  <img src={course.imagePath} alt={course.name} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                    <p className="wd-dashboard-course-title card-text" style={{
                      maxHeight: 100,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {course.description}
                    </p>
                    <button className="btn btn-primary"> Go </button>

                    {currentUser.role === "STUDENT" && (
                  <>
                    {enrollments.some(enrollment => enrollment.user === currentUser._id && enrollment.course === course._id) ? (
                      <button
                        className="btn btn-danger float-end"
                        onClick={() => handleEnrollmentToggle(course._id)}
                      >
                        Unenroll
                      </button>
                    ) : (
                      <button
                        className="btn btn-success float-end"
                        onClick={() => handleEnrollmentToggle(course._id)}
                      >
                        Enroll
                      </button>
                    )}
                  </>
                )}
                    {/* Only show Edit and Delete buttons for FACULTY */}
                    {currentUser.role === "FACULTY" && (
                      <>
                        <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end">
                          Edit
                        </button>

                        <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }} className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </Link>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
