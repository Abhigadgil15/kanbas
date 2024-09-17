import { useParams } from "react-router-dom";

export default function AssignmentEditor() {
  const { aid } = useParams(); // Get the assignment ID from the URL

  // Dummy data based on assignment ID for demonstration
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

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value={data.name || ""} />
      <br />
      <br />
      <label htmlFor="wd-description">Description</label>
      <textarea id="wd-description" value={data.description || ""} />
      <br />
      <label htmlFor="wd-points">Points</label>
      <input id="wd-points" type="number" value={data.points || ""} />
      <br />
      <label htmlFor="wd-grade-type">Grade Type</label>
      <select id="wd-grade-type" value={data.gradeType || "percent"}>
        <option value="percent">Percent</option>
        <option value="number">Number</option>
      </select>
      <br />
      <label htmlFor="wd-submission-type">Submission Type</label>
      <select id="wd-submission-type" value={data.submissionType || "online"}>
        <option value="online">Online</option>
        <option value="in-person">In-person</option>
      </select>
      <br />
      <label>Online Entry Options</label>
      <div>
        <label>
          <input
            type="checkbox"
            checked={data.entryOptions.includes("text-entry")}
            readOnly
          />
          Text Entry
        </label>
        <label>
          <input
            type="checkbox"
            checked={data.entryOptions.includes("website-url")}
            readOnly
          />
          Website URL
        </label>
        <label>
          <input
            type="checkbox"
            checked={data.entryOptions.includes("text-recordings")}
            readOnly
          />
          Text Recordings
        </label>
        <label>
          <input
            type="checkbox"
            checked={data.entryOptions.includes("student-annotations")}
            readOnly
          />
          Student Annotations
        </label>
        <label>
          <input
            type="checkbox"
            checked={data.entryOptions.includes("file-uploads")}
            readOnly
          />
          File Uploads
        </label>
      </div>
      <br />
      <label htmlFor="wd-assign-to">Assign To</label>
      <select id="wd-assign-to" value={data.assignedTo || "everyone"}>
        <option value="everyone">Everyone</option>
        <option value="specific">Specific</option>
      </select>
      <br />
      <label htmlFor="wd-due-date">Due Date</label>
      <input id="wd-due-date" type="date" value={data.dueDate || ""} />
      <br />
      <label htmlFor="wd-date-range-from">Date Range From</label>
      <input
        id="wd-date-range-from"
        type="date"
        value={data.dateRange?.from || ""}
      />
      <br />
      <label htmlFor="wd-date-range-to">Date Range To</label>
      <input
        id="wd-date-range-to"
        type="date"
        value={data.dateRange?.to || ""}
      />
      <br />
      <button>Update Assignment</button>
    </div>
  );
}
