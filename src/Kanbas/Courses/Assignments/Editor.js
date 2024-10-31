import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer"; // Adjust the import path

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const assignments = useSelector((state) => state.assignmentReducer.assignments);

  // Check if editing an existing assignment
  let existingAssignment = assignments.find((assignment) => assignment._id === aid) || null;

  // Initialize formData
  const [formData, setFormData] = useState({
    _id: existingAssignment ? existingAssignment._id : `A00${assignments.length + 1}`,
    title: existingAssignment ? existingAssignment.title : "",
    description: existingAssignment ? existingAssignment.description : "",
    points: existingAssignment ? existingAssignment.points : 0,
    assignmentGroup: existingAssignment ? existingAssignment.assignmentGroup : "ASSIGNMENTS",
    submissionType: existingAssignment ? existingAssignment.submissionType : "Online",
    due: existingAssignment ? existingAssignment.due : "",
    notAvailableUntil: existingAssignment ? existingAssignment.notAvailableUntil : "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Reset formData when `aid` changes or if there's no existingAssignment match
  useEffect(() => {
    if (!existingAssignment) {
      setFormData({
        _id: `A00${assignments.length + 1}`, // Generate a new ID for new assignments
        title: "",
        description: "",
        points: 0,
        assignmentGroup: "ASSIGNMENTS",
        submissionType: "Online",
        due: "",
        notAvailableUntil: "",
      });
    } else {
      setFormData(existingAssignment); // Load data for existing assignments
    }
  }, [existingAssignment, aid, assignments.length]);

  // Handle save action
  const handleSave = () => {
    if (!formData.title || !formData.description || !formData.points || !formData.due) {
      alert("Please fill in all required fields.");
      return;
    }

    if (existingAssignment) {
      // If editing, dispatch updateAssignment
      dispatch(updateAssignment({ ...formData, course: cid }));
    } else {
      // If adding new, dispatch addAssignment
      dispatch(addAssignment({ ...formData, course: cid }));
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-3">
      <b>
        <label htmlFor="title">Assignment Name</label>
      </b>
      <br />
      <input 
        id="title" 
        value={formData.title} 
        className="form-control mb-3" 
        onChange={handleChange} 
        required 
      />

      <div className="form-group mb-3">
        <p style={{ color: "red", fontWeight: "bold" }}>This assignment is available online</p>
        <textarea
          id="description"
          cols={30}
          rows={10}
          className="form-control"
          style={{ borderColor: "lightgray" }}
          value={formData.description} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="mb-3">
        <label htmlFor="points"><b>Points</b></label>
        <input 
          id="points" 
          type="number" 
          value={formData.points} 
          className="form-control mb-3" 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="mb-3">
        <label htmlFor="assignmentGroup"><b>Assignment Group</b></label>
        <select 
          id="assignmentGroup" 
          className="form-control" 
          value={formData.assignmentGroup} 
          onChange={handleChange} 
        >
          <option value="ASSIGNMENTS">Assignments</option>
          <option value="QUIZZES">Quizzes</option>
          <option value="PROJECTS">Projects</option>
          <option value="DISCUSSIONS">Discussions</option>
        </select>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <label htmlFor="submissionType"><b>Submission Type</b></label>
          <select 
            id="submissionType" 
            className="form-control mb-3" 
            value={formData.submissionType} 
            onChange={handleChange} 
          >
            <option value="Online">Online</option>
            <option value="In Person">On Paper</option>
          </select>

          {formData.submissionType === "Online" && (
            <div>
              <h6 className="card-title">Online Entry Options</h6>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="textEntry" 
                  defaultChecked 
                />
                <label className="form-check-label" htmlFor="textEntry">
                  Text Entry
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="websiteURL" 
                />
                <label className="form-check-label" htmlFor="websiteURL">
                  Website URL
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="mediaRecordings" 
                />
                <label className="form-check-label" htmlFor="mediaRecordings">
                  Media Recordings
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="fileUpload" 
                />
                <label className="form-check-label" htmlFor="fileUpload">
                  File Uploads
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="due"><b>Due</b></label>
          <input
            type="date"
            id="due"
            value={formData.due || ''}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="notAvailableUntil"><b>Available Until</b></label>
          <input
            type="date"
            id="notAvailableUntil"
            value={formData.notAvailableUntil || ''}
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button type="button" className="btn btn-secondary me-2">Cancel</button>
        </Link>
        <button type="button" className="btn btn-success" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
