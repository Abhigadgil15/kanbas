import { useParams } from "react-router-dom";
import WebDev from "../Modules/WebDev";
import AlgorithmsModules from "../Modules/AlgorithmsModules";
import PDPModules from "../Modules/PDPModules";
import CourseStatus from "./Status";

export default function Home() {
  const { cid } = useParams(); // Get the course ID from the URL

  const renderModules = () => {
    switch (cid.toLowerCase()) {
      case "web-dev":
        return <WebDev />;
      case "algorithms":
        return <AlgorithmsModules />;
      case "pdp":
        return <PDPModules />;
      default:
        return <WebDev />; // Default to WebDev or another default module
    }
  };

  return (
    <table id="wd-home">
      <tbody>
        <tr>
          <td valign="top">
            {renderModules()} {/* Render the appropriate module based on the course */}
          </td>
          <td valign="top">
            <CourseStatus /> {/* Display course status */}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
