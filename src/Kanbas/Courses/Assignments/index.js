import { BsGripVertical } from "react-icons/bs";
import AssignmentSearch from "./AssignmentSearch";
import AssignmentControlButtons from "./AssignmentControlButton";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdOutlineAssignment } from "react-icons/md";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import IndividualAssignment from "./IndividualAssignment";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state) => state.assignmentReducer); 
  const { currentUser } = useSelector((state) => state.accountReducer); // Get currentUser from Redux
  console.log(assignments); // Fetch assignments from Redux store

  return (
    <div className="me-3">
      <AssignmentSearch />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5">
          <div className="d-flex align-items-center justify-content-between wd-assignments-title p-3 ps-2 bg-secondary">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <RiArrowDownSFill className="me-2" />
              <b>ASSIGNMENTS</b>
            </div>
            <AssignmentControlButtons />
          </div>
          <ul className="wd-assignment-list list-group rounded-0">
            {assignments
              .filter((assignment) => assignment.course === cid)
              .map((assignment) => (
                <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-2">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="me-3 text-success" />
                    <span>
                      {currentUser.role === "FACULTY" ? (
                        <a
                          className="wd-assignment-link text-dark text-decoration-none fw-bold"
                          href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        >
                          {assignment.title}
                        </a>
                      ) : (
                        <span className="text-dark fw-bold">{assignment.title}</span> // Display title as plain text for non-faculty
                      )}
                      <br />
                      <span className="text-danger">Multiple Modules</span> |
                      <b> Not available until</b> {assignment.notAvailableUntil} |{" "}
                      <b>Due</b> {assignment.due} | {assignment.points} pts
                    </span>
                    <span className="ms-auto">
                      {currentUser.role === "FACULTY" && (
                        <IndividualAssignment assignmentId={assignment._id} />
                      )} 
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
