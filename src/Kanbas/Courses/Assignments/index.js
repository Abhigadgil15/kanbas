import { BsGripVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import * as db from "../../Database"; // Ensure this imports your updated JSON with dates
import { useParams } from "react-router";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa"; 
import { MdSearch } from "react-icons/md"; 
import LessonControlButtons from "../Modules/LessonControlButton";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  console.log(cid)
  return (
    <div>
      <div className="d-flex align-items-center mb-3">
        <div className="input-group flex-grow-1 me-3">
          <input
            id="wd-search-assignment"
            placeholder="Search for Assignments"
            className="form-control"
          />
          <span className="input-group-text">
            <MdSearch />
          </span>
        </div>
        <button
          id="wd-add-assignment-group"
          className="btn btn-transparent me-2" 
        >
          <FaPlus /> Group
        </button>
        <button
          id="wd-add-assignment"
          className="btn btn-danger" // Red Assignments button
        >
          <FaPlus /> Assignment
        </button>
      </div>
      <div className="card" style={{ height: 'auto', padding: '10px' }}>
        <div className="card-body p-2">
          <h3 id="wd-assignments-title" className="d-flex justify-content-between align-items-center fs-5 mb-2">
            <div className="d-flex align-items-center">
              <BsGripVertical /> <span className="ms-2">ASSIGNMENTS</span> {/* Added margin for spacing */}
            </div>
            <div className="d-flex align-items-center">
              <span className="badge bg-light text-dark border rounded-pill me-2">40% of Total</span>
              <button className="btn btn-secondary rounded-pill">
                <FaPlus />
              </button>
              <IoEllipsisVertical className="fs-4" />
            </div>
          </h3>
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        {assignments
          .filter((assignment) => assignment.course === cid)
          .map((assignment) => (
            <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 border-gray d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3" />
              <FaRegEdit className="text-success me-2 ms-2 mt-1" />
              <div className="flex-grow-1">
                <a
                  className="wd-assignment-link"
                  href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                >
                  {assignment._id} - {assignment.title}
                </a>
                <br />
                <span className="text-red" style={{ marginLeft: '35px' }}>
                  Multiple Modules
                </span>{" "}
                | <b>Not available until</b> {assignment.notAvailableUntil} |{" "}
                <b>Due</b> {assignment.due} | 100 pts
                <LessonControlButtons />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
