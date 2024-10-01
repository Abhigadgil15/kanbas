import { Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";
import "./styles.css";

export default function Kanbas() {
  const location = useLocation();

  const isCoursesPage =
    location.pathname.includes("/Kanbas/Courses") ||
    location.hash.includes("/Kanbas/Courses");

  const courses = [
    { id: "web-dev", title: "Web Dev" },
    { id: "pdp", title: "PDP" },
    { id: "algorithms", title: "Algorithms" },
  ];

  return (
    <div id="wd-kanbas" style={{ display: "flex" }}>
      <div>
        <KanbasNavigation />
      </div>

      {/* Content area (Second Column) */}
      <div>
        {/* Wrap the isCoursesPage content and Routes in the new div with offset */}
        <div className="wd-main-content-offset p-3">
          {isCoursesPage && (
            <div style={{ marginBottom: "20px" }}>
              {courses.map((course) => (
                <Link key={course.id} to={`/Kanbas/Courses/${course.id}`}>
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "10px", height: "40px" }}
                  >
                    {course.title}
                  </button>
                </Link>
              ))}
              <h3> Placeholder buttons for sidebar to be added later</h3>
            </div>
          )}

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Courses/:cid/*" element={<Courses />} /> {/* Specific course */}
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
