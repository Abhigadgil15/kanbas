import { FaPlus } from "react-icons/fa6";
import { IoBan } from "react-icons/io5";
import GreenCheckMark from "./GreenCheckMark";
export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module</button>
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckMark />
          Publish All</button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckMark />
              Publish all modules and items</a>
          </li>
          <li>
            <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
              <GreenCheckMark />
              Publish modules only</a>
          </li>
          <li>
            <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
              < IoBan  />
              Unpublish all modules and items</a>
          </li>
          <li>
            <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
              < IoBan/>
              Unpublish modules only</a>
          </li>
        </ul>
      </div>
      <button id="wd-view-progress" className="btn btn-lg btn-secondary"
          type="button">
          View Progress</button>
        <button id="wd-collpase-all" className="btn btn-lg btn-secondary"
          type="button">
        Collapse All</button>
    </div>
);}
