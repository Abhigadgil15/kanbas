import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { enrollCourse, unenrollCourse } from './Enrollments/reducer';
import * as coursesClient from "./Courses/client";

export default function Dashboard({
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  const { currentUser } = useSelector((state) => state.accountReducer);
  const enrollments = useSelector((state) => state.enrollmentReducer.enrollments);
  
  const [showAllCourses, setShowAllCourses] = useState(false);  // Initially set to false
  const [fetchedCourses, setFetchedCourses] = useState([]);  // State to store fetched courses
  const dispatch = useDispatch();

  // Fetch all courses from the server
  const fetchAllCourses = async () => {
    try {
      const courses = await coursesClient.fetchAllCourses();
      setFetchedCourses(courses);  // Update the state with fetched courses
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Fetch enrolled courses initially
  const enrolledCourses = fetchedCourses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === course._id
    )
  );

  // Effect to fetch all courses when "Show All Courses" is clicked
  useEffect(() => {
    if (showAllCourses) {
      fetchAllCourses();
    }
  }, [showAllCourses]); // Trigger fetch when showAllCourses state changes

  const displayedCourses = showAllCourses ? fetchedCourses : enrolledCourses;

  // Handle the enrollment toggle (enroll or unenroll)
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

  // Load enrolled courses on initial render
  useEffect(() => {
    if (!showAllCourses) {
      fetchAllCourses();  // Fetch all courses on initial load if the user is a student
    }
  }, []);  // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {currentUser.role === "STUDENT" && (
        <button
          className="btn btn-info float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}

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
                  </div>
                </Link>
                <div className="d-flex justify-content-between align-items-center p-3">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary me-2"
                  >
                    Go
                  </Link>

                  {currentUser.role === "STUDENT" && (
                    enrollments.some(enrollment => enrollment.user === currentUser._id && enrollment.course === course._id) ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => handleEnrollmentToggle(course._id)}
                      >
                        Unenroll
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={() => handleEnrollmentToggle(course._id)}
                      >
                        Enroll
                      </button>
                    )
                  )}

                  {currentUser.role === "FACULTY" && (
                    <>
                      <button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2">
                        Edit
                      </button>

                      <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-danger"
                        id="wd-delete-course-click">
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
