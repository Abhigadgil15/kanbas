import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { enrollCourse, unenrollCourse } from './Enrollments/reducer';
import * as coursesClient from "./Courses/client";
import * as enrollmentsClient from "./Enrollments/client";

export default function Dashboard({
  courses,
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
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  // Fetch all courses
  const fetchAllCourses = async () => {
    try {
      const courses = await coursesClient.fetchAllCourses();
      setFetchedCourses(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Fetch enrolled courses for the user
  const fetchCoursesForEnrolledUser = async () => {
    try {
      const enrolledCourses = await coursesClient.findCoursesForEnrolledUser(currentUser._id);
      setEnrolledCourses(enrolledCourses);
      // Update Redux store with enrolled courses
      enrolledCourses.forEach(course => {
        dispatch(enrollCourse({ userId: currentUser._id, courseId: course._id }));
      });
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data when component mounts
  // useEffect(() => {
  //   const initializeDashboard = async () => {
  //     setIsLoading(true);
  //     await Promise.all([
  //       fetchCoursesForEnrolledUser(),
  //       fetchAllCourses()
  //     ]);
  //   };

  //   initializeDashboard();
  // }, [currentUser._id]);
  useEffect(() => {
    if (currentUser) {
      fetchCoursesForEnrolledUser();
      fetchAllCourses();
    }
  }, [currentUser._id,courses]); 

  // Determine displayed courses based on toggle state
  const displayedCourses = showAllCourses ? fetchedCourses : enrolledCourses;

  // Check if user is enrolled in a specific course
  const isEnrolledInCourse = (courseId) => {
    return enrolledCourses.some(course => course._id === courseId);
  };

  // Toggle enrollment state with optimistic updates
  const handleEnrollmentToggle = async (courseId) => {
    const enrolled = isEnrolledInCourse(courseId);

    // Optimistic update
    if (enrolled) {
      setEnrolledCourses(prev => prev.filter(course => course._id !== courseId));
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    } else {
      const courseToEnroll = fetchedCourses.find(course => course._id === courseId);
      setEnrolledCourses(prev => [...prev, courseToEnroll]);
      dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    }

    try {
      if (enrolled) {
        await enrollmentsClient.unenrollCourse(currentUser._id, courseId);
      } else {
        await enrollmentsClient.enrollCourse(currentUser._id, courseId);
      }
    } catch (error) {
      console.error("Error updating enrollment:", error);
      // Revert optimistic update on error
      if (enrolled) {
        setEnrolledCourses(prev => [...prev, fetchedCourses.find(c => c._id === courseId)]);
        dispatch(enrollCourse({ userId: currentUser._id, courseId }));
      } else {
        setEnrolledCourses(prev => prev.filter(course => course._id !== courseId));
        dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  state={{ isEnrolled: isEnrolledInCourse(course._id) }}
                >
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
                    state={{ isEnrolled: isEnrolledInCourse(course._id) }}
                    className="btn btn-primary me-2"
                  >
                    Go
                  </Link>

                  {currentUser.role === "STUDENT" && (
                    isEnrolledInCourse(course._id) ? (
                      <button className="btn btn-danger" onClick={() => handleEnrollmentToggle(course._id)}>
                        Unenroll
                      </button>
                    ) : (
                      <button className="btn btn-success" onClick={() => handleEnrollmentToggle(course._id)}>
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