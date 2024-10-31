import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useSelector((state) => state.accountReducer);
  const enrollments = useSelector((state) => state.enrollmentReducer.enrollments);
  const { cid: courseId } = useParams();
  const location = useLocation();

  useEffect(() => {
    // Check if the user is a student and the courseId is provided
    if (currentUser?.role === "STUDENT" && courseId) {
      const isEnrolled = enrollments.some(
        (enrollment) => enrollment.user === currentUser._id && enrollment.course === courseId
      );

      // If the student is not enrolled in the course
      if (!isEnrolled) {
        alert("You must enroll in the course first");
      }
    }
  }, [currentUser, courseId, enrollments]);

  // Check if the user is logged in
  if (!currentUser) {
    return <Navigate to="/Kanbas/Account/Signin" replace state={{ from: location }} />;
  }

  // If the user is a student and the courseId is provided, check enrollment
  if (currentUser.role === "STUDENT" && courseId) {
    const isEnrolled = enrollments.some(
      (enrollment) => enrollment.user === currentUser._id && enrollment.course === courseId
    );

    // If the student is not enrolled in the course
    if (!isEnrolled) {
      return <Navigate to="/Kanbas/Dashboard" replace />;
    }
  }

  // If all checks pass, return the children
  return children;
}