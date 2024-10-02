import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (10)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/algorithms.jpg" width={200} alt="algo"/>
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS1234 Algorithms
            </Link>
            <p className="wd-dashboard-course-title">
              Problem Solving and Analytical thinking
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <br />
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/algorithms.jpg" width={200} alt="pdp" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS5010 PDP
            </Link>
            <p className="wd-dashboard-course-title">Paradigms of Programming</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>{" "}
        </div>{" "}
        <br />
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/algorithms.jpg" width={200} alt="wd"/>
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              5600 Web Development
            </Link>
            <p className="wd-dashboard-course-title">Web Development</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>{" "}
        </div>{" "}
        <br />
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/algorithms.jpg" width={200} alt="cc"/>
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS6100 Cloud Computing
            </Link>
            <p className="wd-dashboard-course-title">Cloud Computing</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>{" "}
        </div>{" "}
        <br />
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/algorithms.jpg" width={200} alt="ce" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS6700 Computer Engineering
            </Link>
            <p className="wd-dashboard-course-title">Computer Engineering</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>{" "}
        </div>{" "}
        <br />
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/algorithms.jpg" width={200} alt="nlp"/>
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS6821 Natural Language Processing
            </Link>
            <p className="wd-dashboard-course-title">NLP Course</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>{" "}
        </div>{" "}
        <br />
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/nlp.webp" width={200} alt="ca"/>
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS6900 Computer Applications
            </Link>
            <p className="wd-dashboard-course-title">Applications of SD</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>{" "}
        </div>
        <br />
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/algorithms.jpg" width={200} alt="thesis"/>
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS7000 Master Thesis
            </Link>
            <p className="wd-dashboard-course-title">Research Curse</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>{" "}
        </div>
        <br />
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/algorithms.jpg" width={200}  alt="ml"/>
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS5325 Machine Learning
            </Link>
            <p className="wd-dashboard-course-title">Machine Learning</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>{" "}
        </div>
        <br />
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/algorithms.jpg" width={200} alt ="NN" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS6321 Neural Networks
            </Link>
            <p className="wd-dashboard-course-title">Neural Networks</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}