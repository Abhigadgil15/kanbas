import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";


export default function Kanbas() {
  const location = useLocation();
  
  // Check if the current path is a course-related path
  const isCoursesPage = location.pathname.startsWith("/Kanbas/Courses");

  const courses = [
    { id: "web-dev", name: "Web Dev" },
    { id: "pdp", name: "PDP" },
    { id: "algorithms", name: "Algorithms" }
  ];
  

  return (
    <div id="wd-kanbas">
      <div style={{ display: 'flex' }}>
        {/* Main sidebar that stays visible on all tabs */}
        <div style={{ flex: '1', padding: '10px' }}>
          <KanbasNavigation />

          {/* Conditionally render the course list only when on the Courses page */}
          {isCoursesPage && (
            <>
              <h3>Courses</h3>
              <ul>
                {courses.map((course) => (
                  <li key={course.id}>
                    <Link to={`/Kanbas/Courses/${course.id}/Home`}>{course.name}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div style={{ flex: '3', padding: '10px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            {/* Handle courses navigation */}
            <Route path="/Courses/:cid/*" element={<Courses />} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
