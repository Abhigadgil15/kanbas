import { useParams } from "react-router-dom";
import WebDev from "../Modules/WebDev";
import AlgorithmsModules from "../Modules/AlgorithmsModules";
import PDPModules from "../Modules/PDPModules";
import ModulesControls from "./ModulesControls";
import CourseStatus from "./Status";

export default function Home() {
  const { cid } = useParams(); // Get the course ID from the URL

  // Function to render the appropriate module based on the course ID
  const renderModules = () => {
    switch (cid.toLowerCase()) {
      case "web-dev":
        return <WebDev />;
      case "algorithms":
        return <AlgorithmsModules />;
      case "pdp":
        return <PDPModules />;
      default:
        return <h2>Course yet to be unlocked</h2>;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}> {/* Main flex container with full height */}
      <div style={{ flex: "1", display: "flex", flexDirection: "column" }}> {/* Left column for modules */}
        <ModulesControls /> {/* Modules Controls on the top */}
        <div style={{ flex: "1", marginTop: "1rem", overflowY: "auto" }}> {/* Course content area */}
          {renderModules()} 
        </div>
      </div>

      <div className="d-none d-lg-block" style={{ flex: "0 0 auto", minWidth: "250px" }}> {/* Right column for Course Status */}
        <CourseStatus />
      </div>
    </div>
  );
}
