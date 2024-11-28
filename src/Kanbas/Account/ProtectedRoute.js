import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function ProtectedRoute({ children}) {
  const { cid } = useParams();
  const { currentUser } = useSelector((state) => state.accountReducer);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    const checkEnrollment = async () => {
      if (!currentUser) {
        setIsLoading(false);
        return;
      }

      if (!cid) {
        setIsEnrolled(true);
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${REMOTE_SERVER}/api/users/${currentUser._id}/courses`, { withCredentials: true }
        );
        setIsEnrolled(
          response.data.some((enrollment) => enrollment._id === cid)
        );
      } catch (error) {
        console.error("Error:", error);
        setIsEnrolled(false);
      }
      setIsLoading(false);
    };

    checkEnrollment();
  }, [currentUser, cid]);

  if (!currentUser) {
    return <Navigate to="/Kanbas/Account/Signin" />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (cid && !isEnrolled) {
    console.log("here")
    return <Navigate to="/Kanbas/Dashboard" />;
  }
  
  // if (!isEnrolled) {
  //   console.log(isEnrolled)
  // }

  return children;
}