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
    <div className="d-flex" id="wd-home">
  <div className="flex-fill">
    {renderModules()}
  </div>
  <div className="d-none d-md-block">
    <CourseStatus />
  </div>
</div>
  );
}
