import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { enrollCourse, unenrollCourse } from './Enrollments/reducer';
import * as coursesClient from "./Courses/client";
import * as enrollmentsClient from "./Enrollments/client";

export default function Dashboard({
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  const { currentUser } = useSelector((state) => state.accountReducer);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [fetchedCourses, setFetchedCourses] = useState([]);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const dispatch = useDispatch();

  // Fetch all courses
  const fetchAllCourses = async () => {
    try {
      const courses = await coursesClient.fetchAllCourses();
      setFetchedCourses(courses);
      console.log("Fetched all courses:", courses);  // Debug log

    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Fetch enrolled courses for the user
  const fetchCoursesForEnrolledUser = async () => {
    try {
      const enrolledCourses = await coursesClient.findCoursesForEnrolledUser(currentUser._id);
      setEnrolledCourses(enrolledCourses);
      console.log("Fetched enrolled courses for user:", enrolledCourses);  // Debug log
      console.log("nooo")
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchCoursesForEnrolledUser();
    fetchAllCourses();
  }, []);

  // Determine displayed courses based on toggle state
  const displayedCourses = showAllCourses ? fetchedCourses : enrolledCourses;

  // Toggle enrollment state
  const handleEnrollmentToggle = async (courseId) => {
    const isEnrolled = enrolledCourses.some(
      (course) => course._id === courseId
    );
  
    try {
      if (isEnrolled) {
        await enrollmentsClient.unenrollCourse(currentUser._id, courseId);
        setEnrolledCourses((prev) => prev.filter((course) => course._id !== courseId));
        dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
      } else {
        await enrollmentsClient.enrollCourse(currentUser._id, courseId);
        const enrolledCourse = fetchedCourses.find((course) => course._id === courseId);
        setEnrolledCourses((prev) => [...prev, enrolledCourse]);
        dispatch(enrollCourse({ userId: currentUser._id, courseId }));
      }
    } catch (error) {
      console.error("Error updating enrollment:", error);
    }
  };

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
            <button className="btn btn-primary float-end" onClick={addNewCourse}>Add</button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse}>
              Update
            </button>
          </h5>
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {currentUser.role === "FACULTY" ? "Published Courses" : "Courses"} ({displayedCourses.length})
      </h2>
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
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary me-2">
                    Go
                  </Link>

                  {currentUser.role === "STUDENT" && (
                    enrolledCourses.some(enrolledCourse => enrolledCourse._id === course._id) ? (
                      <button className="btn btn-danger" onClick={() => handleEnrollmentToggle(course._id)}>
                        Unenroll
                      </button>
                    ) : (
                      <button className="btn btn-success" onClick={() => handleEnrollmentToggle(course._id)}>
                        Enroll
                      </button>
                    )
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
