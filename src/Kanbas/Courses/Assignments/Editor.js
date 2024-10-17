import { useParams } from "react-router";
import { assignments } from "../../Database"; 
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid,aid } = useParams();
  const assignment = assignments.find((assignment) => assignment._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-3">
      <b>
        <label htmlFor="wd-name">Assignment Name</label>
      </b>
      <br />
      <input 
        id="wd-name" 
        value={assignment.title} 
        className="form-control mb-3" 
        readOnly 
      />

      <div className="form-group mb-3">
        <p style={{ color: "red", fontWeight: "bold" }}>
          This assignment is available online
        </p>
        <textarea
          id="wd-description"
          cols={30}
          rows={10}
          className="form-control"
          style={{ borderColor: "lightgray" }}
          defaultValue={assignment.description} 
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-points"><b>Points</b></label>
        <input 
          id="wd-points" 
          value={assignment.points} // Use points from the assignment
          className="form-control mb-3" 
          readOnly // Make this editable if needed
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-group"><b>Assignment Group</b></label>
        <select id="wd-group" className="form-control" defaultValue={assignment.assignmentGroup}>
          <option value="ASSIGNMENTS">Assignments</option>
          <option value="QUIZZES">Quizzes</option>
          <option value="PROJECTS">Projects</option>
          <option value="DISCUSSIONS">Discussions</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-display-grade-as"><b>Display Grade as</b></label>
        <select id="wd-display-grade-as" className="form-control mb-3">
          <option value="PERCENTAGE">PERCENTAGE</option>
          <option value="NUMBER">NUMBER</option>
        </select>
      </div>
      
      <label htmlFor="wd-submission-type"><b>Submission Type</b></label>
      <div className="card mb-3">
        <div className="card-body">
          <div className="mb-3">
            <select id="wd-submission-type" className="form-control" defaultValue={assignment.submissionType}>
              <option value="Online">Online</option>
              <option value="In Person">On Paper</option>
            </select>
          </div>

          <div className="mb-3">
            <b>Online Entry Options</b>
            <div className="form-check">
              <input type="checkbox" id="wd-text-entry" className="form-check-input" />
              <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-website-url" className="form-check-input" />
              <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
              <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
              <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-file-upload" className="form-check-input" />
              <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-assign-to"><b>Assign to</b></label>
          <div className="form-control" id="wd-assign-to">
            <span className="badge bg-secondary me-1">
              Everyone
              <button type="button" className="btn-close btn-close-white btn-sm ms-1" aria-label="Close"></button>
            </span>
            <span className="badge bg-secondary me-1">
              Students
              <button type="button" className="btn-close btn-close-white btn-sm ms-1" aria-label="Close"></button>
            </span>
            <span className="badge bg-secondary me-1">
              Admins
              <button type="button" className="btn-close btn-close-white btn-sm ms-1" aria-label="Close"></button>
            </span>
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="wd-due-date"><b>Due</b></label>
          <div className="input-group">
            <input
              type="date"
              name="wd-due-date"
              id="wd-due-date"
              value={assignment.due} 
              className="form-control"
            />
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-available-from"><b>Available from</b></label>
          <div className="input-group"> 
            <input
              type="date"
              name="wd-available-from"
              id="wd-available-from"
              value={assignment.notAvailableUntil} 
              className="form-control"
            />
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="wd-available-until"><b>Until</b></label>
          <div className="input-group">
            <input
              type="date"
              name="wd-available-until"
              id="wd-available-until"
              value={assignment.due} 
              className="form-control"
            />
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end">
      <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
        <button type="button" className="btn btn-secondary me-2">Cancel</button>
        <button type="button" className="btn btn-success">Save</button>
        </Link>
      </div>
    </div>
  );
}
