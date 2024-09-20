import { useState } from "react";
export default function AssignmentAlgorithms({ aid }) {
    const assignmentData = {
        1: {
          name: "A1 - ENV + HTML",
          description: "The assignment is available online. Submit a link to the landing page of the project.",
          points: 100,
          gradeType: "percent",
          submissionType: "online",
          entryOptions: ["text-entry", "website-url"],
          assignedTo: "everyone",
          dueDate: "2024-05-13",
          dateRange: { from: "2024-05-06", to: "2024-05-13" }
        },
        2: {
          name: "A2 - CSS + Bootstrap",
          description: "This assignment focuses on CSS and Bootstrap. Submit the project by the due date.",
          points: 100,
          gradeType: "percent",
          submissionType: "online",
          entryOptions: ["text-entry"],
          assignedTo: "everyone",
          dueDate: "2024-05-22",
          dateRange: { from: "2024-05-15", to: "2024-05-22" }
        },
        3: {
          name: "A3 - JavaScript + React",
          description: "Develop a JavaScript application using React. Submit the project link by the due date.",
          points: 150,
          gradeType: "percent",
          submissionType: "online",
          entryOptions: ["text-entry", "file-uploads"],
          assignedTo: "everyone",
          dueDate: "2024-06-01",
          dateRange: { from: "2024-05-25", to: "2024-06-01" }
        }
      };
  
    const data = assignmentData[aid] || {};
    const [submissionType, setSubmissionType] = useState(data.submissionType || "online");
  
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <br></br>
        <br></br>
        <input id="wd-name" value={data.name || ""} />
        <br />
        <br />
        <textarea id="wd-description" rows="5" value={data.description || ""} />
        <br />
        <br />
        <label htmlFor="wd-points">Points</label>
        <input id="wd-points" type="number" value={data.points || ""} />
        <br />
        <br />
        <label htmlFor="wd-grade-type">Grade Type</label>
        <select id="wd-grade-type" value={data.gradeType || "percent"}>
          <option value="percent">Percent</option>
          <option value="number">Number</option>
        </select>
        <br />
        <br />
        <label htmlFor="wd-submission-type">Submission Type</label>
        <select
          id="wd-submission-type"
          value={submissionType}
          onChange={(e) => setSubmissionType(e.target.value)}
        >
          <option value="online">Online</option>
          <option value="in-person">In-person</option>
        </select>
        <br />
        <br />
        {submissionType === "online" && (
          <>
            <label>Online Entry Options</label>
            <div>
              <label>
                <input type="checkbox" checked={data.entryOptions.includes("text-entry")} />
                Text Entry
              </label>
              <label>
                <input type="checkbox" checked={data.entryOptions.includes("website-url")} />
                Website URL
              </label>
              <label>
                <input type="checkbox" checked={data.entryOptions.includes("text-recordings")} />
                Text Recordings
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={data.entryOptions.includes("student-annotations")}
                />
                Student Annotations
              </label>
              <label>
                <input type="checkbox" checked={data.entryOptions.includes("file-uploads")} />
                File Uploads
              </label>
            </div>
            <br />
          </>
        )}
        <br />
        <label htmlFor="wd-assign-to">Assign To</label>
        <select id="wd-assign-to" value={data.assignedTo || "everyone"}>
          <option value="everyone">Everyone</option>
          <option value="specific">Specific</option>
        </select>
        <br />
        <br />
        <label htmlFor="wd-due-date">Due Date</label>
        <input id="wd-due-date" type="date" value={data.dueDate || ""} />
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div>
            <label htmlFor="wd-date-range-from">Date Range From</label>
            <input id="wd-date-range-from" type="date" value={data.dateRange?.from || ""} />
          </div>
          <div>
            <label htmlFor="wd-date-range-to">Date Range To</label>
            <input id="wd-date-range-to" type="date" value={data.dateRange?.to || ""} />
          </div>
        </div>
        <br />
        <hr />
        <div style={{ textAlign: "right" }}>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    );
  }
  