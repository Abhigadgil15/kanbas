import { createSlice } from "@reduxjs/toolkit";
import { assignments as dbAssignments } from "../../Database";

const initialState = {
  assignments: dbAssignments, // Initial assignments from assignments.json
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const courseAssignments = state.assignments.filter(
        (a) => a.course === assignment.course
      );

      let nextId;

      if (courseAssignments.length > 0) {
        // For existing courses, find the highest ID number
        const highestId = Math.max(
          ...courseAssignments.map((a) => parseInt(a._id.slice(1), 10))
        );
        nextId = `A${String(highestId + 1).padStart(3, "0")}`;
      } else {
        // For new courses, start IDs at 1001
        const courseCount = new Set(state.assignments.map(a => a.course)).size; // Count unique courses
        nextId = `A${String(courseCount * 100 + 1).padStart(3, "0")}`; // Generate ID starting from 1001
      }

      // Create the new assignment
      const newAssignment = {
        _id: nextId,
        title: assignment.title,
        description: assignment.description,
        course: assignment.course,
        notAvailableUntil: assignment.notAvailableUntil,
        due: assignment.due,
        points: assignment.points,
        submissionType: assignment.submissionType,
        assignmentGroup: assignment.assignmentGroup,
      };
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m) =>
        m._id === assignment._id ? assignment : m
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
