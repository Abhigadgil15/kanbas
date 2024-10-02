import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa"; // Importing plus icon for buttons
import { MdSearch } from "react-icons/md"; // Importing search icon for the search input
import LessonControlButtons from "../Modules/LessonControlButton";

export default function Assignments() {
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
          className="btn btn-transparent me-2" // Transparent Group button
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
            </div>
          </h3>
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-3 border-gray d-flex align-items-start">
          <BsGripVertical className="me-2 fs-3" />
          <div className="flex-grow-1">
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A1 - Binary Search Trees
            </a>
            <br />
            <span className="text-red" style={{ marginLeft: '35px' }}>
              Multiple Modules
            </span>{" "}
            | <b>Not available until</b> June 8 at 12:00 am |{" "}
            <b>Due</b> June 23 at 11:59 pm | 100 pts
            <LessonControlButtons />
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-3 border-gray d-flex align-items-start">
          <BsGripVertical className="me-2 fs-3" />
          <div className="flex-grow-1">
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/124"
            >
              A2 - Queues and Stacks
            </a>
            <br />
            <span className="text-red" style={{ marginLeft: '35px' }}>
              Multiple Modules
            </span>{" "}
            | <b>Not available until</b> June 27 at 12:00 am |{" "}
            <b>Due</b> July 7 at 11:59 pm | 100 pts
            <LessonControlButtons />
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-3 border-gray d-flex align-items-start">
          <BsGripVertical className="me-2 fs-3" />
          <div className="flex-grow-1">
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/125"
            >
              A3 - Heaps and Priority Queues
            </a>
            <br />
            <span className="text-red" style={{ marginLeft: '35px' }}>
              Multiple Modules
            </span>{" "}
            | <b>Not available until</b> Aug 7 at 12:00 am |{" "}
            <b>Due</b> Aug 13 at 11:59 pm | 100 pts
            <LessonControlButtons />
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-3 border-gray d-flex align-items-start">
          <BsGripVertical className="me-2 fs-3" />
          <div className="flex-grow-1">
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/126"
            >
              A4 - Graphs
            </a>
            <br />
            <span className="text-red" style={{ marginLeft: '35px' }}>
              Multiple Modules
            </span>{" "}
            | <b>Not available until</b> Sept 13 at 12:00 am |{" "}
            <b>Due</b> Sept 30 at 11:59 pm | 100 pts
            <LessonControlButtons />
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-3 border-gray d-flex align-items-start">
          <BsGripVertical className="me-2 fs-3" />
          <div className="flex-grow-1">
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/127"
            >
              A5 - Dynamic Programming
            </a>
            <br />
            <span className="text-red" style={{ marginLeft: '35px' }}>
              Multiple Modules
            </span>{" "}
            | <b>Not available until</b> Oct 08 at 12:00 am |{" "}
            <b>Due</b> Oct 20 at 11:59 pm | 100 pts
            <LessonControlButtons />
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-3 border-gray d-flex align-items-start">
          <BsGripVertical className="me-2 fs-3" />
          <div className="flex-grow-1">
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/128"
            >
              A6 - Advanced Data Structures
            </a>
            <br />
            <span className="text-red" style={{ marginLeft: '35px' }}>
              Multiple Modules
            </span>{" "}
            | <b>Not available until</b> Nov 4 at 12:00 am |{" "}
            <b>Due</b> Nov 21 at 11:59 pm | 100 pts
            <LessonControlButtons />
          </div>
        </li>
      </ul>
    </div>
  );
}
