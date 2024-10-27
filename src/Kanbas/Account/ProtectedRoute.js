import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import * as db from '../Database'; // Import your database or state management for enrollments

export default function ProtectedRoute({ children, courseId }) {
  const { currentUser } = useSelector((state) => state.accountReducer);
  const { enrollments } = db; // Assume enrollments come from your state or database

  // Check if the user is logged in
  if (!currentUser) {
    return <Navigate to="/Kanbas/Account/Signin" />;
  }

  // If the user is a student and the courseId is provided, check enrollment
  if (currentUser.role === "STUDENT" && courseId) {
    const isEnrolled = enrollments.some(
      (enrollment) => enrollment.user === currentUser._id && enrollment.course === courseId
    );

    // If the student is not enrolled in the course, redirect them
    if (!isEnrolled) {
      return <Navigate to="/Kanbas/Dashboard" />; // Or another route that makes sense
    }
  }

  // If all checks pass, return the children
  return children;
}