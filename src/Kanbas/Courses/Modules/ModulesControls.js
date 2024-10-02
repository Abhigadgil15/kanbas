import { FaPlus } from "react-icons/fa6";
import { IoBan } from "react-icons/io5";
import GreenCheckMark from "./GreenCheckMark";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <div className="d-inline">
        <button
          id="wd-add-module-btn"
          className="btn btn-lg btn-danger me-1"
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Module
        </button>
        <div className="dropdown d-inline me-1">
          <button
            id="wd-publish-all-btn"
            className="btn btn-lg btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            <GreenCheckMark />
            Publish All
          </button>
          <ul className="dropdown-menu">
            <li>
              <button 
                id="wd-publish-all-modules-and-items-btn" 
                className="dropdown-item" 
                type="button"
              >
                <GreenCheckMark />
                Publish all modules and items
              </button>
            </li>
            <li>
              <button 
                id="wd-publish-modules-only-button" 
                className="dropdown-item" 
                type="button"
              >
                <GreenCheckMark />
                Publish modules only
              </button>
            </li>
            <li>
              <button 
                id="wd-unpublish-all-modules-and-items" 
                className="dropdown-item" 
                type="button"
              >
                <IoBan />
                Unpublish all modules and items
              </button>
            </li>
            <li>
              <button 
                id="wd-unpublish-modules-only" 
                className="dropdown-item" 
                type="button"
              >
                <IoBan />
                Unpublish modules only
              </button>
            </li>
          </ul>
        </div>
        <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1" type="button">
          View Progress
        </button>
        <button id="wd-collapse-all" className="btn btn-lg btn-secondary" type="button">
          Collapse All
        </button>
      </div>
    </div>
  );
}
