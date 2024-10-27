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
      
      const nextId = courseAssignments.length > 0 
        ? `A00${courseAssignments.length + 1}` 
        : "A001";
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
      state.assignments = [...state.assignments, newAssignment];
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
