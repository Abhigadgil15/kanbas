import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaSearch } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import GreenCheckMark from "../Modules/GreenCheckMark";

export default function Assignments() {
  const { cid } = useParams(); 
  const assignmentsData = {
    'web-dev': [
      { id: 1, name: "A1 - ENV + HTML", description: "Multiple Modules", available: "Not available until May 6 at 12:00 am", due: "Due May 13 at 11:59 pm", points: 100 },
      { id: 2, name: "A2 - CSS + Bootstrap", description: "Single Module", available: "Available from May 15 at 12:00 am", due: "Due May 22 at 11:59 pm", points: 100 },
      { id: 3, name: "A3 - JavaScript + React", description: "Multiple Modules", available: "Available from May 25 at 12:00 am", due: "Due June 1 at 11:59 pm", points: 150 }
    ],
    'pdp': [
      { id: 1, name: "PDP Assignment 1", description: "Reflection Paper", available: "Available now", due: "Due March 15 at 11:59 pm", points: 50 },
      { id: 2, name: "PDP Assignment 2", description: "Final Presentation", available: "Available from April 1", due: "Due April 10 at 11:59 pm", points: 100 }
    ],
    'algorithms': [
      { id: 1, name: "Algo Assignment 1", description: "Binary Search", available: "Available from May 1 at 12:00 am", due: "Due May 7 at 11:59 pm", points: 100 },
      { id: 2, name: "Algo Assignment 2", description: "Heaps", available: "Available from May 10 at 12:00 am", due: "Due May 17 at 11:59 pm", points: 150 }
    ]
  };

  const assignments = assignmentsData[cid] || [];

  return (
    <div id="wd-assignments" className="container mt-4">
      {/* Search and buttons row */}
      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-lg-4">
          <div className="input-group">
            <span className="input-group-text"><FaSearch /></span>
            <input
              type="search"
              className="form-control"
              placeholder="Search for Assignments"
              style={{ flexGrow: 1 }}
            />
          </div>
        </div>

        <div className="col-12 col-lg-8 text-end">
          <button type="button" className="btn btn-light btn-sm me-2">
            <FaPlusCircle /> Group
          </button>
          <button type="button" className="btn btn-danger btn-sm">
            <FaPlusCircle /> Assignment
          </button>
        </div>
      </div>

      {/* Assignments Title */}
      <div className="mt-4">
  <h3 id="wd-assignments-title" className="d-flex justify-content-between align-items-center">
    <span className="fs-6">ASSIGNMENTS</span> {/* Makes the text smaller */}
    <span className="fs-6 wd-percentage-box bg-light text-muted p-2 rounded-pill ms-auto">
      40% of Assignments
    </span> {/* Curved box with Bootstrap rounded-pill class */}
  </h3>
</div>

      {/* Assignment List */}
      <ul id="wd-assignment-list" className="list-group mt-3">
  {assignments.map((assignment) => (
    <li key={assignment.id} className="list-group-item position-relative ps-3 border-start border-4">
      <Link className="wd-assignment-link" to={`/Kanbas/Courses/${cid}/Assignments/${assignment.id}`}>
        {assignment.name}
      </Link>
      <p className="mb-0">
        {assignment.description} <br />
        <b>{assignment.available}</b> <br />
        <b>{assignment.due}</b> <br />
        <b>{assignment.points} points</b>
      </p>
      <div className="position-absolute top-0 end-0 m-2 d-flex align-items-center">
        {/* Adding GreenCheckMark component before the dropdown */}
        <GreenCheckMark className="me-2" />
        
        {/* Dropdown for ellipsis icon with 'Delete' option */}
        <div className="dropdown">
          <button className="btn btn-link p-0" type="button" id={`dropdownMenuButton${assignment.id}`} data-bs-toggle="dropdown" aria-expanded="false">
            <FaEllipsisV />
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby={`dropdownMenuButton${assignment.id}`}>
            <li>
              <button className="dropdown-item" type="button">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
}

