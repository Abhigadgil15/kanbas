import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";
import "./styles.css";

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
    <div id="wd-kanbas" style={{ display: 'flex', height: '100vh' }}>
      {/* Main sidebar that stays visible on all tabs */}
      <div 
        style={{
          width: '250px',
          padding: '10px',
          backgroundColor: '#f8f9fa', 
          position: 'fixed', // Keeps the sidebar on the leftmost side
          top: '0',
          left: '0',
          height: '100vh',
          overflowY: 'auto' // Adds scrollbar if needed
        }}
      >
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

      {/* Main content area that shifts to the right due to sidebar */}
      <div 
        style={{
          flex: '1',
          padding: '10px',
          marginLeft: '250px', // Matches the width of the sidebar
        }}
      >
        <Routes>
          {/* Redirect to Account as the default route */}
          <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
          
          {/* Account and Dashboard routes */}
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          
          {/* Courses routes */}
          <Route path="/Courses/:cid/*" element={<Courses />} />
          
          {/* Other routes */}
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
