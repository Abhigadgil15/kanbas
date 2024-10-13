import { useParams } from "react-router";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
export default function CoursesNavigation() {
  const { courseId } = useParams();
  const { pathname } = useLocation();

  const links = [
    { label: "Home", path: `/Kanbas/Courses/${courseId}/Home` },
    { label: "Modules", path: `/Kanbas/Courses/${courseId}/Modules` },
    { label: "Piazza", path: `/Kanbas/Courses/${courseId}/Piazza` },
    { label: "Zoom", path: `/Kanbas/Courses/${courseId}/Zoom` },
    { label: "Assignments", path: `/Kanbas/Courses/${courseId}/Assignments` },
    { label: "Quizzes", path: `/Kanbas/Courses/${courseId}/Quizzes` },
    { label: "Grades", path: `/Kanbas/Courses/${courseId}/Grades` },
    { label: "People", path: `/Kanbas/Courses/${courseId}/People` },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link 
          key={link.label} 
          to={link.path} 
          id={`wd-course-${link.label.toLowerCase()}-link`}
          className={`list-group-item border border-0 ${
            pathname.includes(link.label) ? "active" : "text-danger"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}