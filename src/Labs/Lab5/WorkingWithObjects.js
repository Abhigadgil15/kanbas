import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    
    const [module, setModule] = useState({
        name: "Web Development Module",
        description: "Learn how to build web applications",
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>

            {/* Assignment Title */}
            <h4>Modifying Assignment Title</h4>
            <div className="mb-3">
                <input
                    className="form-control w-75 d-inline"
                    id="wd-assignment-title"
                    defaultValue={assignment.title}
                    onChange={(e) =>
                        setAssignment({ ...assignment, title: e.target.value })
                    }
                />
                <a
                    id="wd-update-assignment-title"
                    className="btn btn-primary float-end"
                    href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
                >
                    Update Title
                </a>
            </div>
            <hr />

            {/* Assignment Score */}
            <h4>Modifying Assignment Score</h4>
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control w-75 d-inline"
                    value={assignment.score}
                    onChange={(e) =>
                        setAssignment({ ...assignment, score: e.target.value })
                    }
                />
                <a
                    id="wd-update-assignment-score"
                    className="btn btn-primary float-end"
                    href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
                >
                    Update Score
                </a>
            </div>
            <hr />

            {/* Assignment Completed Status */}
            <h4>Modifying Assignment Completion Status</h4>
            <div className="mb-3">
                <label className="form-check-label me-2">Completed:</label>
                <input
                    type="checkbox"
                    checked={assignment.completed}
                    onChange={(e) =>
                        setAssignment({ ...assignment, completed: e.target.checked })
                    }
                />
                <a
                    id="wd-update-assignment-completed"
                    className="btn btn-primary float-end"
                    href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
                >
                    Update Completion Status
                </a>
            </div>
            <hr />

            {/* Retrieve Assignment */}
            <h4>Retrieving Assignment Data</h4>
            <div className="mb-3">
                <a
                    id="wd-retrieve-assignments"
                    className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/assignment`}
                >
                    Get Assignment
                </a>
            </div>
            <hr />

            {/* Module Name and Description */}
            <h4>Modifying Module Name and Description</h4>
            <div className="mb-3">
                <input
                    className="form-control w-75 d-inline"
                    id="wd-module-name"
                    defaultValue={module.name}
                    onChange={(e) =>
                        setModule({ ...module, name: e.target.value })
                    }
                />
                <a
                    id="wd-update-module-name"
                    className="btn btn-primary float-end"
                    href={`${MODULE_API_URL}/name/${module.name}`}
                >
                    Update Module Name
                </a>
            </div>
            <div className="mb-3">
                <input
                    className="form-control w-75 d-inline"
                    id="wd-module-description"
                    defaultValue={module.description}
                    onChange={(e) =>
                        setModule({ ...module, description: e.target.value })
                    }
                />
                <a
                    id="wd-update-module-description"
                    className="btn btn-primary float-end"
                    href={`${MODULE_API_URL}/description/${module.description}`}
                >
                    Update Module Description
                </a>
            </div>
            <hr />

            {/* Retrieve Module */}
            <h4>Retrieving Module Data</h4>
            <div className="mb-3">
                <a
                    id="wd-retrieve-module"
                    className="btn btn-primary"
                    href={`${REMOTE_SERVER}/lab5/module`}
                >
                    Get Module
                </a>
            </div>
        </div>
    );
}
