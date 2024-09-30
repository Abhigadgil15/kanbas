import { useParams } from "react-router-dom";
import WebDev from "../Modules/WebDev";
import AlgorithmsModules from "../Modules/AlgorithmsModules";
import PDPModules from "../Modules/PDPModules";
import ModulesControls from "./ModulesControls";

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
        return <PDPModules/>;
      default:
        return <h2>Course yet to be unlocked</h2>;
    }
  };

  return (
    <div className="d-flex flex-column" id="wd-home"> {/* Use flex-column for vertical stacking */}
      <ModulesControls />  
      
      <div className="flex-fill mt-3"> {/* Add margin-top for spacing */}
        {renderModules()} 
      </div>
    </div>
  );
}
