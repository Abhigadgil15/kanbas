import { Link, useParams } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams(); // Get the current course ID

  // Assignment data for different courses
  const assignmentsData = {
    'web-dev': [
      {
        id: 1,
        name: "A1 - ENV + HTML",
        description: "Multiple Modules",
        available: "Not available until May 6 at 12:00 am",
        due: "Due May 13 at 11:59 pm",
        points: 100
      },
      {
        id: 2,
        name: "A2 - CSS + Bootstrap",
        description: "Single Module",
        available: "Available from May 15 at 12:00 am",
        due: "Due May 22 at 11:59 pm",
        points: 100
      },
      {
        id: 3,
        name: "A3 - JavaScript + React",
        description: "Multiple Modules",
        available: "Available from May 25 at 12:00 am",
        due: "Due June 1 at 11:59 pm",
        points: 150
      }
    ],
    'pdp': [
      {
        id: 1,
        name: "PDP Assignment 1",
        description: "Reflection Paper",
        available: "Available now",
        due: "Due March 15 at 11:59 pm",
        points: 50
      },
      {
        id: 2,
        name: "PDP Assignment 2",
        description: "Final Presentation",
        available: "Available from April 1",
        due: "Due April 10 at 11:59 pm",
        points: 100
      }
    ],
    'algorithms': [
      {
        id: 1,
        name: "Algo Assignment 1",
        description: "Binary Search",
        available: "Available from May 1 at 12:00 am",
        due: "Due May 7 at 11:59 pm",
        points: 100
      },
      {
        id: 2,
        name: "Algo Assignment 2",
        description: "Heaps",
        available: "Available from May 10 at 12:00 am",
        due: "Due May 17 at 11:59 pm",
        points: 150
      }
    ]
  };

  // Get assignments based on the current course ID
  const assignments = assignmentsData[cid] || [];

  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        {assignments.map((assignment) => (
          <li key={assignment.id} className="wd-assignment-list-item">
            <Link
              className="wd-assignment-link"
              to={`/Kanbas/Courses/${cid}/Assignments/${assignment.id}`}
            >
              {assignment.name}
            </Link>
            <p>
              {assignment.description} <br />
              <b>{assignment.available}</b> <br />
              <b>{assignment.due}</b> <br />
              <b>{assignment.points} points</b>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
