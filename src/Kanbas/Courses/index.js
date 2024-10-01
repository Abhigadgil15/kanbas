import { useParams, Navigate } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import WebDev from "./Modules/WebDev";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PDPModules from "./Modules/PDPModules"; // Import modules for PDP
import AlgorithmsModules from "./Modules/AlgorithmsModules"; // Import modules for Algorithms
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Tables";

export default function Courses() {
  const { cid } = useParams(); 

  const renderModules = () => {
    switch (cid.toLowerCase()) { 
      case "web-dev":
        return <WebDev />;
      case "pdp":
        return <PDPModules />;
      case "algorithms":
        return <AlgorithmsModules />;
      default:
        return <WebDev />;
    }
  };
  

  return (
    <div id="wd-courses">
  <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      Course {cid} </h2> <hr />
  <div className="d-flex">
    <div className="d-none d-md-block">
      <CoursesNavigation />

    </div>
    <div className="flex-fill">
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="Modules" element={renderModules()} />
      <Route path="Assignments" element={<Assignments />} />
      <Route path="Assignments/:aid" element={<AssignmentEditor />} />
      <Route path ="People" element={<PeopleTable/>}/>
    </Routes>
    </div></div>
</div>




  );
}