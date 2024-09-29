import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div id="wd-dashboard" className="container">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (3) Courses to be published (4)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="col-md-4 mb-4">
          <div className="card wd-dashboard-course">
            <img
              src="https://via.placeholder.com/200"
              className="card-img-top"
              alt="Web Development Course"
            />
            <div className="card-body">
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/web-dev/Home">
                CS5600
              </Link>
              <p className="wd-dashboard-course-title">Web Development</p>
              <Link to="/Kanbas/Courses/web-dev/Home">Go</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card wd-dashboard-course">
            <img
              src="https://via.placeholder.com/200"
              className="card-img-top"
              alt="Algorithms Course"
            />
            <div className="card-body">
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/algorithms/Home">
                CS5784
              </Link>
              <p className="wd-dashboard-course-title">Algorithms</p>
              <Link to="/Kanbas/Courses/algorithms/Home">Go</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card wd-dashboard-course">
            <img
              src="https://via.placeholder.com/200"
              className="card-img-top"
              alt="Programming Paradigms Course"
            />
            <div className="card-body">
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/pdp/Home">
                CS5010
              </Link>
              <p className="wd-dashboard-course-title">Paradigms of Programming Design</p>
              <Link to="/Kanbas/Courses/pdp/Home">Go</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card wd-dashboard-course">
            <img
              src="https://via.placeholder.com/200"
              className="card-img-top"
              alt="Software Engineering"
            />
            <div className="card-body">
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/pdp/Home">
                CS5784
              </Link>
              <p className="wd-dashboard-course-title">Computer Software Engineering</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card wd-dashboard-course">
            <img
              src="https://via.placeholder.com/200"
              className="card-img-top"
              alt="Computer Vision"
            />
            <div className="card-body">
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/pdp/Home">
                CS5900
              </Link>
              <p className="wd-dashboard-course-title">Computer Vision</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card wd-dashboard-course">
            <img
              src="https://via.placeholder.com/200"
              className="card-img-top"
              alt="NLP"
            />
            <div className="card-body">
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/pdp/Home">
                CS5800
              </Link>
              <p className="wd-dashboard-course-title">Natural Language Processing</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card wd-dashboard-course">
            <img
              src="https://via.placeholder.com/200"
              className="card-img-top"
              alt="Computer Engineering"
            />
            <div className="card-body">
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/pdp/Home">
                CS6001
              </Link>
              <p className="wd-dashboard-course-title">Computer Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
