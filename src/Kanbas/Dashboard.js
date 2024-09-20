import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="course-container">
        <div className="wd-dashboard-course">
          <img
            src="https://via.placeholder.com/200" // Placeholder image link
            alt="Web Development Course" // Meaningful alt text
            width={200}
          />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/web-dev/Home"
            >
              CS5600
            </Link>
            <p className="wd-dashboard-course-title">Web Development</p>
            <Link to="/Kanbas/Courses/web-dev/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img
            src="https://via.placeholder.com/200" // Placeholder image link
            alt="Algorithms Course" // Meaningful alt text
            width={200}
          />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/algorithms/Home"
            >
              CS5784
            </Link>
            <p className="wd-dashboard-course-title">Algorithms</p>
            <Link to="/Kanbas/Courses/algorithms/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img
            src="https://via.placeholder.com/200" // Placeholder image link
            alt="Programming Paradigms Course" // Meaningful alt text
            width={200}
          />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/pdp/Home"
            >
              CS5010
            </Link>
            <p className="wd-dashboard-course-title">
              Paradigms of Programming Design
            </p>
            <Link to="/Kanbas/Courses/pdp/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
