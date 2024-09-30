import { Link } from "react-router-dom";
import React from "react";
import "./styles.css";

const Dashboard = () => {
  const courses = [
    {
      id: "web-dev",
      title: "CS5600 Web Development",
      description: "Full Stack software developer",
      image: "/images/webdev.jpg",
    },
    {
      id: "algorithms",
      title: "CS5784 Algorithms",
      description: "Data Structures and Algorithms",
      image: "/images/algorithms.jpg",
    },
    {
      id: "pdp",
      title: "CS5010 Paradigms of Programming Design",
      description: "Various programming paradigms",
      image: "/images/java1.png",
    },
    {
      id: "software-engineering",
      title: "CS5784 Computer Software Engineering",
      description: "Principles of Software Engineering",
      image: "/images/SE.webp",
    },
    {
      id: "computer-vision",
      title: "CS5900 Computer Vision",
      description: "Understanding and implementing computer vision techniques",
      image: "/images/cv.avif",
    },
    {
      id: "nlp",
      title: "CS5800 Natural Language Processing",
      description: "Understanding and processing human language",
      image: "/images/nlp.webp",
    },
    {
      id: "computer-engineering",
      title: "CS6001 Computer Engineering",
      description: "Foundations of Computer Engineering",
      image: "/images/CE.webp",
    },
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {courses.map((course) => (
            <div key={course.id} className="wd-dashboard-course col">
              <div className="card rounded-3 overflow-hidden" style={{ width: "300px", margin: "0 auto", height: "400px" }}>
                <Link className="wd-dashboard-course-link text-decoration-none text-dark" to={`/Kanbas/Courses/${course.id}/Home`}>
                  <img src={course.image} className="card-img-top" alt={course.title} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course.title}</h5>
                    <p className="wd-dashboard-course-description card-text">{course.description}</p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
