import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa"; // Importing plus icon for buttons
import { MdSearch } from "react-icons/md"; // Importing search icon for the search input
import LessonControlButtons from "../Modules/LessonControlButton";

export default function Assignments() {
  return (
    <div>
      <div className="input-group mb-3">
        <input
          id="wd-search-assignment"
          placeholder="Search for Assignments"
          className="form-control"
        />
        <span className="input-group-text">
          <MdSearch />
        </span>
      </div>
      <button id="wd-add-assignment-group" className="btn btn-primary me-1">
        <FaPlus /> Group
      </button>
      <button id="wd-add-assignment" className="btn btn-success">
        <FaPlus /> Assignment
      </button>
      <h3 id="wd-assignments-title" className="fs-5">
        ASSIGNMENTS 40% of Total 
        <button className="btn btn-secondary ms-2">+</button>
      </h3>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-3 mb-3 border-gray">
          <BsGripVertical className="me-2 fs-3" />
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            A1 - Binary Search Trees
          </a>
          <br />
          <span className="text-red" style={{ marginLeft: '35px'}}>Multiple Modules</span> | <b>Not available until</b> June 8 at 12:00 am |{" "}
          <b>Due</b> June 23 at 11:59 pm | 100 pts
          <LessonControlButtons/>
        </li>
        <li className="wd-assignment-list-item list-group-item p-3 mb-3 border-gray">
          <BsGripVertical className="me-2 fs-3" />
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/124"
          >
            A2 - Queues and Stacks
          </a>
          <br />
          <span className="text-red" style={{ marginLeft: '35px'}}>Multiple Modules</span> | <b>Not available until</b> June 27 at 12:00 am |{" "}
          <b>Due</b> July 7 at 11:59 pm | 100 pts
          <LessonControlButtons/>
        </li>
        <li className="wd-assignment-list-item list-group-item p-3 mb-3 border-gray">
          <BsGripVertical className="me-2 fs-3" />
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/125"
          >
            A3 - Heaps and Priority Queues
          </a>
          <br />
          <span className="text-red" style={{ marginLeft: '35px'}}>Multiple Modules</span>  | <b>Not available until</b> Aug 7 at 12:00 am |{" "}
          <b>Due</b> Aug 13 at 11:59 pm | 100 pts
          <LessonControlButtons/>
        </li>
        <li className="wd-assignment-list-item list-group-item p-3 mb-3 border-gray">
          <BsGripVertical className="me-2 fs-3" />
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/126"
          >
            A4 - Graphs
          </a>
          <br />
          <span className="text-red" style={{ marginLeft: '35px'}}>Multiple Modules</span>  | <b>Not available until</b> Sept 13 at 12:00 am |{" "}
          <b>Due</b> Sept 30 at 11:59 pm | 100 pts
          <LessonControlButtons/>
        </li>
        <li className="wd-assignment-list-item list-group-item p-3 mb-3 border-gray">
          <BsGripVertical className="me-2 fs-3" />
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/127"
          >
            A5 - Dynamic Programming
          </a>
          <br />
          <span className="text-red" style={{ marginLeft: '35px'}}>Multiple Modules</span>  | <b>Not available until</b> Oct 08 at 12:00 am |{" "}
          <b>Due</b> Oct 20 at 11:59 pm | 100 pts
          <LessonControlButtons/>
        </li>
        <li className="wd-assignment-list-item list-group-item p-3 mb-3 border-gray">
          <BsGripVertical className="me-2 fs-3" />
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/128"
          >
            A6 - Advanced Data Structures
          </a>
          <br />
          <span className="text-red" style={{ marginLeft: '35px'}}>Multiple Modules</span>  | <b>Not available until</b> Nov 4 at 12:00 am |{" "}
          <b>Due</b> Nov 21 at 11:59 pm | 100 pts
          <LessonControlButtons/>
        </li>
        
      </ul>
    </div>
  );
}
