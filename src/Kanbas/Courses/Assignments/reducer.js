import { createSlice } from "@reduxjs/toolkit";
import { assignments as dbAssignments } from "../../Database";

const initialState = {
  assignments: dbAssignments, // Initial assignments from assignments.json
};

// Helper function to reassign IDs in sequence for a course
const reassignIds = (assignments, course) => {
  let counter = 1;
  return assignments
    .filter((a) => a.course === course)
    .map((assignment) => ({
      ...assignment,
      _id: `A00${counter++}`,
    }));
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        ...assignment,
        _id: `A00${state.assignments.filter(a => a.course === assignment.course).length + 1}`,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      const deletedAssignment = state.assignments.find((a) => a._id === assignmentId);
      if (deletedAssignment) {
        state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
        state.assignments = [
          ...state.assignments.filter((a) => a.course !== deletedAssignment.course),
          ...reassignIds(state.assignments, deletedAssignment.course),
        ];
      }
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
