import { useParams } from "react-router-dom";
import AssignmentAlgorithms from "./AssignmentModules/AssignmentAlgorithms";
import AssignmentPDP from "./AssignmentModules/AssignmentPDP";
import AssignmentWebDev from "./AssignmentModules/AssignmentWebDev";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get the course ID (cid) and assignment ID (aid) from the URL

  const renderAssignmentEditor = () => {
    switch (cid.toLowerCase()) {
      case "web-dev":
        return <AssignmentWebDev aid={aid} />;
      case "pdp":
        return <AssignmentPDP aid={aid} />;
      case "algorithms":
        return <AssignmentAlgorithms aid={aid} />;
      default:
        return <h3>No valid course selected</h3>;
    }
  };

  return (
    <div id="assignment-editor">
      {renderAssignmentEditor()} {/* Dynamically render the assignment editor based on the course */}
    </div>
  );
}
