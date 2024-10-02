import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (10)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/* Course Card 1 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden border" style={{ height: "350px" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/full-stack-development.png" className="card-img-top" style={{ border: "1px solid #dee2e6", height: "200px", width: "100%", objectFit: "cover" }} alt="algo" />
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

          {/* Course Card 2 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden border" style={{ height: "350px" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/java1.png" className="card-img-top" style={{ border: "1px solid #dee2e6", height: "200px", width: "100%", objectFit: "cover" }} alt="pdp" />
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

          {/* Course Card 3 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden border" style={{ height: "350px" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/webdev.jpg" className="card-img-top" style={{ border: "1px solid #dee2e6", height: "200px", width: "100%", objectFit: "cover" }} alt="wd" />
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

          {/* Course Card 4 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden border" style={{ height: "350px" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/CC.png" className="card-img-top" style={{ border: "1px solid #dee2e6", height: "200px", width: "100%", objectFit: "cover" }} alt="cc" />
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

          {/* Course Card 5 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden border" style={{ height: "350px" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/CE.webp" className="card-img-top" style={{ border: "1px solid #dee2e6", height: "200px", width: "100%", objectFit: "cover" }} alt="ce" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS6700 CE
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Computer Engineering
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course Card 6 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden border" style={{ height: "350px" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/nlp.webp" className="card-img-top" style={{ border: "1px solid #dee2e6", height: "200px", width: "100%", objectFit: "cover" }} alt="nlp" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS6821 NLP
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Natural Language Processing
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course Card 7 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden border" style={{ height: "350px" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/algorithms.jpg" className="card-img-top" style={{ border: "1px solid #dee2e6", height: "200px", width: "100%", objectFit: "cover" }} alt="ca" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5800 Algorithms
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Applications of Algorithms
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course Card 8 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden border" style={{ height: "350px" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/cv.avif" className="card-img-top" style={{ border: "1px solid #dee2e6", height: "200px", width: "100%", objectFit: "cover" }} alt="thesis" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS6897 Computer Vision
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Introduction to OpenCV library
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course Card 9 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden border" style={{ height: "350px" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/SE.webp" className="card-img-top" style={{ border: "1px solid #dee2e6", height: "200px", width: "100%", objectFit: "cover" }} alt="ml" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS7654 Software Engineering
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Software Engineering Principles
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course Card 10 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden border" style={{ height: "350px" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/IoT.jpg" className="card-img-top" style={{ border: "1px solid #dee2e6", height: "200px", width: "100%", objectFit: "cover" }} alt="dl" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS6340 IoT
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Internet of Things
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
