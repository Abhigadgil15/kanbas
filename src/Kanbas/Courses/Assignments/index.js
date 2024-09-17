import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link className="wd-assignment-link" to="/Kanbas/Courses/1234/Assignments/1">
            A1 - ENV + HTML
          </Link>
          <p>
            Multiple Modules <br />
            <b>Not available until May 6 at 12:00 am</b> <br />
            <b>Due May 13 at 11:59 pm</b> <br />
            <b>100 points</b>
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <Link className="wd-assignment-link" to="/Kanbas/Courses/1234/Assignments/2">
            A2 - CSS + Bootstrap
          </Link>
          <p>
            Single Module <br />
            <b>Available from May 15 at 12:00 am</b> <br />
            <b>Due May 22 at 11:59 pm</b> <br />
            <b>100 points</b>
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <Link className="wd-assignment-link" to="/Kanbas/Courses/1234/Assignments/3">
            A3 - JavaScript + React
          </Link>
          <p>
            Multiple Modules <br />
            <b>Available from May 25 at 12:00 am</b> <br />
            <b>Due June 1 at 11:59 pm</b> <br />
            <b>150 points</b>
          </p>
        </li>
      </ul>
    </div>
  );
}
