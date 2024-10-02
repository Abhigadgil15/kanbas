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
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            A1 - Binary Search Trees
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> June 8 at 12:00 am |{" "}
          <b>Due</b> June 23 at 11:59 pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            A2 - Queues and Stacks
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> June 27 12:00 am |{" "}
          <b>Due</b> July 7 at 11:59 pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            A3 - Heaps and Priority Queues
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> Aug 7 at 12:00 am |{" "}
          <b>Due</b> Aug 13 at 11:59 pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            A4 -Graphs
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> Sept 13 at 12:00 am |{" "}
          <b>Due</b> Sep 30 at 11:59 pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            A5 - Dynamic Programming
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> Oct 08 at 12:00 am |{" "}
          <b>Due</b> Oct 20 at 11:59 pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            A6 - Advanced Data Structures
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> Nov 4 at 12:00 am |{" "}
          <b>Due</b> Nov 21 at 11:59 pm | 100 pts
        </li>
      </ul>
    </div>
  );
}