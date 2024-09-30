import { useParams } from "react-router-dom";
import WebDev from "../Modules/WebDev";
import AlgorithmsModules from "../Modules/AlgorithmsModules";
import PDPModules from "../Modules/PDPModules";
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
        return <WebDev />;
    }
  };

  return (
    <div className="d-flex" id="wd-home">
      {/* Flex-fill class for the main content */}
      <div className="flex-fill">
        {renderModules()} {/* Render the appropriate module */}
      </div>

      {/* Hide course status on small screens */}
      <div className="d-none d-md-block">
        <CourseStatus /> {/* Display course status */}
      </div>
    </div>
  );
}
