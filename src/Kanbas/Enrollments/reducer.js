import { createSlice } from "@reduxjs/toolkit";
// import { enrollments } from "../Database";

const initialState = {
  enrollments: [], // To store the enrollments
  currentUser: null,
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    enrollCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      const alreadyEnrolled = state.enrollments.some(
        (enrollment) =>
          enrollment.user === userId && enrollment.course === courseId
      );
      if (!alreadyEnrolled) {
        state.enrollments.push({ user: userId, course: courseId });
      }
    },
    unenrollCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      // Remove the enrollment
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
  },
});

export const { setCurrentUser, enrollCourse, unenrollCourse,setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;