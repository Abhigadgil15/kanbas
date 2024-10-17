import { FaPlus } from "react-icons/fa6";
import { MdDoNotDisturbAlt } from "react-icons/md";
import GreenCheckmark from "./GreenCheckMark";

export default function ModulesControls() {
  return (
    <div
      id="wd-modules-controls"
      className="d-flex flex-wrap justify-content-end"
    >
      <button
        id="wd-view-progress"
        className="btn btn-lg btn-secondary me-1 float-end"
        type="button"
      >
        View Progress
      </button>
      <button
        id="wd-collapse-all"
        className="btn btn-lg btn-secondary me-1 float-end"
        type="button"
      >
        Collapse All
      </button>

      <div className="dropdown d-inline me-1 float-end">
        <button
          id="wd-publish-all-btn"
          className="btn btn-lg btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              id="wd-publish-all-modules-and-items-btn"
              className="dropdown-item"
              type="button"
            >
              <GreenCheckmark />
              Publish all modules and items
            </button>
          </li>
          <li>
            <button
              id="wd-publish-modules-only-button"
              className="dropdown-item"
              type="button"
            >
              <GreenCheckmark />
              Publish modules only
            </button>
          </li>
          <li>
            <button
              id="wd-unpublish-all-modules-and-items"
              className="dropdown-item"
              type="button"
            >
              <MdDoNotDisturbAlt className="me-1 fs-5" />
              Unpublish all modules and items
            </button>
          </li>
          <li>
            <button
              id="wd-unpublish-modules-only"
              className="dropdown-item"
              type="button"
            >
              <MdDoNotDisturbAlt className="me-1 fs-5" />
              Unpublish modules only
            </button>
          </li>
        </ul>
      </div>
      <button
        id="wd-add-module-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>
    </div>
  );
}
