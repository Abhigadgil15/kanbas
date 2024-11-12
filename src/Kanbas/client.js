import axios from "axios";

// Set up the server API base URL
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`; // Adjust the URL based on your backend

// Function to enroll a user in a course
export const enrollCourse = async (userId, courseId) => {
  try {
    const response = await axios.post(`${ENROLLMENTS_API}/enroll`, {
      userId,
      courseId,
    });
    return response.data;
  } catch (error) {
    console.error("Error enrolling course:", error);
  }
};

// Function to unenroll a user from a course
export const unenrollCourse = async (userId, courseId) => {
  try {
    const response = await axios.post(`${ENROLLMENTS_API}/unenroll`, {
      userId,
      courseId,
    });
    return response.data;
  } catch (error) {
    console.error("Error unenrolling course:", error);
  }
};

// Function to get all enrollments for a user
export const getEnrollments = async (userId) => {
  try {
    const response = await axios.get(`${ENROLLMENTS_API}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching enrollments:", error);
  }
};

//Courses
export const fetchAllCourses = async () => {
    const { data } = await axios.get(COURSES_API);
    return data;
    };
