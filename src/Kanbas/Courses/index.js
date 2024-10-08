import { useParams, Navigate } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import WebDev from "./Modules/WebDev";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PDPModules from "./Modules/PDPModules"; // Import modules for PDP
import AlgorithmsModules from "./Modules/AlgorithmsModules"; // Import modules for Algorithms

export default function Courses() {
  const { cid } = useParams(); // Get the course ID from the URL

  const renderModules = () => {
    switch (cid.toLowerCase()) { // normalize case to ensure matching
      case "web-dev":
        return <WebDev />;
      case "pdp":
        return <PDPModules />;
      case "algorithms":
        return <AlgorithmsModules />;
      default:
        return <WebDev />; // Fallback to WebDev if no matching course
    }
  };
  

  return (
    <div id="wd-courses">
      <h2>Course {cid}</h2> {/* Display the dynamic course ID */}
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <CoursesNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={renderModules()} /> {/* Render dynamic modules */}
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:aid" element={<h3><AssignmentEditor /></h3>} />
                <Route path="People" element={<h3>People</h3>} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
