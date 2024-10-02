import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (10)</h2> <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-4 g-4">
        
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <img src="/images/algorithms.jpg" width={200} alt="algo"/>
          <div>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1234 React JS
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <img src="/images/algorithms.jpg" width={200} alt="pdp"/>
          <div>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS5010 PDP
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Paradigms of Programming
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <img src="/images/algorithms.jpg" width={200} alt="wd"/>
          <div>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  5600 Web Development
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Web Development
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <img src="/images/algorithms.jpg" width={200} alt="cc"/>
          <div>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS6100 Cloud Computing
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Cloud Computing
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <img src="/images/algorithms.jpg" width={200} alt="ce"/>
          <div>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS6700 Computer Engineering
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Computer Engineering
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <img src="/images/algorithms.jpg" width={200} alt="nlp"/>
          <div>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS6821 Natural Language Processing
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  NLP Course
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <img src="/images/algorithms.jpg" width={200} alt="ca"/>
          <div>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS6900 Computer Applications
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Applications of SD
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <img src="/images/algorithms.jpg" width={200} alt="thesis"/>
          <div>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS7000 Master Thesis
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Research Course
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <img src="/images/algorithms.jpg" width={200} alt="ml"/>
          <div>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS5325 Machine Learning
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Machine Learning
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <img src="/images/algorithms.jpg" width={200} alt="NN"/>
          <div>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS6321 Neural Networks
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Neural Networks
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
