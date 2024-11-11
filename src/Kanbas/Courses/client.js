import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};


export const deleteCourse = async (id) => {
  const { data } = await axios.delete(`${COURSES_API}/${id}`);
  return data;
};

export const updateCourse = async (course) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

//Modules
export const findModulesForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  console.log(response.data);
  return response.data;
};

export const createModuleForCourse = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
}

//Assignments
export const findAssignmentsForCourse= async (courseId) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const createAssignmentForCourse = async (courseId, assignment) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
}






