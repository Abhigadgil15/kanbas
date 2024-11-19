import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import Navigation from './Navigation';
import 'react-quill/dist/quill.snow.css';
import { FaTimes } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md"; import { BsThreeDotsVertical } from "react-icons/bs"; // Import Quill styles

export default function QuizEditor() {
    const [description, setDescription] = useState('');
    const handleDescriptionChange = (value) => {
        setDescription(value); // Update the description state
    };

    return (
        <div id="wd-quiz-editor" className="p-3">
            <div className="d-flex justify-content-end align-items-center mb-3">
                <div className="d-flex align-items-center">
                    <span>Points: 0</span>
                    <MdDoNotDisturbAlt className="ms-4" />
                    <span className="ms-2 text-muted">Not Published</span>
                </div>
                <BsThreeDotsVertical className="ms-2" />
            </div>
            <hr></hr>
            <Navigation />
            <b>
                <label htmlFor="title">Quiz Name</label>
            </b>
            <br />
            <input
                id="title"
                className="form-control mb-3"
                required
            />

            {/* Add React Quill Rich Text Editor Above Description */}
            <div className="form-group mb-3">
                <label htmlFor="description"><b>Quiz Description</b></label>
                <ReactQuill
                    value={description}
                    onChange={handleDescriptionChange}
                    theme="snow"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="quizGroup"><b>Quiz Type</b></label>
                <select
                    id="quizGroup"
                    className="form-control">
                    <option value="QUIZZES">Graded Quiz</option>
                    <option value="EXAMS">Practice Quiz</option>
                    <option value="PRACTICE">Graded Survey</option>
                    <option value="SURVEYS">Ungraded Survey</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="quizGroup"><b>Assignment Group</b></label>
                <select
                    id="assignmentGroup"
                    className="form-control"
                >
                    <option value="QUIZZES">Quizzes</option>
                    <option value="EXAMS">Exams</option>
                    <option value="PRACTICE">Assignments</option>
                    <option value="SURVEYS">Projects</option>
                </select>
            </div>
            <div className="mb-3 ms-3">
                Options
                <div className="form-check mt-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="shuffleOptions"
                        defaultChecked
                    />
                    <label className="form-check-label" htmlFor="shuffleOptions">
                        Shuffle Options
                    </label>
                </div>
                <div className="form-check mt-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="timeLimit"
                        onChange={(e) => {
                            const timeLimitInput = document.getElementById('timeLimitValue');
                            if (e.target.checked) {
                                timeLimitInput.disabled = false;
                            } else {
                                timeLimitInput.disabled = true;
                                timeLimitInput.value = 20; // Reset to default
                            }
                        }}
                    />
                    <label className="form-check-label" htmlFor="timeLimit">
                        Time Limit
                    </label>
                </div>

                {/* Time Limit Value and Unit */}
                <div className="d-flex mt-2">
                    <input
                        id="timeLimitValue"
                        className="form-control me-2"
                        type="number"
                        defaultValue={20}
                        disabled
                        min={1}
                        step={1}
                        style={{ width: "80px" }}
                    />
                    <span>minutes</span>
                </div>
            </div>
            {/* Mini Card for Multiple Attempts */}
            <div className="card mt-3">
                <div className="card-body">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="multipleAttempts"
                        />
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="multipleattempts"
                            onChange={(e) => {
                                const multipleAttemptsInput = document.getElementById('multipleAttemptsValue');
                                if (e.target.checked) {
                                    multipleAttemptsInput.disabled = false;
                                } else {
                                    multipleAttemptsInput.disabled = true;
                                    multipleAttemptsInput.value = 1; // Reset to default
                                }
                            }}
                        />
                        <label className="form-check-label" htmlFor="multipleAttempts">
                            Add Multiple Attempts
                        </label>

                    </div>
                    <div className="d-flex mt-2">
                        <input
                            id="multipleAttemptsValue"
                            className="form-control me-2"
                            type="number"
                            defaultValue={1}
                            disabled
                            required
                            min={1}
                            step={1}
                            style={{ width: "80px" }}
                        />
                        <span>attempts</span>
                    </div>
                    <div className="form-check mt-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="correct-answers"
                            defaultChecked
                            required
                            onChange={(e) => {
                                const datetimeInput = document.getElementById('show-answers-on');
                                if (e.target.checked) {
                                    datetimeInput.disabled = false;
                                } else {
                                    datetimeInput.disabled = true;
                                    datetimeInput.value = ''; // Reset to default
                                }
                            }}
                        />
                        <label className="form-check-label" htmlFor="correct-answers">
                            Show correct answers
                        </label>
                    </div>

                    {/* DateTime input for showing correct answers */}
                    <div className="d-flex mt-2">
                        <input
                            type="datetime-local"
                            id="show-answers-on"
                            className="form-control"
                            disabled
                            required
                        />
                    </div>
                    <br></br>
                    <b>
                        <label htmlFor="access-code">Access Code</label>
                    </b>
                    <br />
                    <input
                        id="access-code"
                        className="form-control mb-3"
                    />
                    <br></br>
                    <div className="row mb-3">
                        {/* Webcam Required */}
                        <div className="col-md-4">
                            <label htmlFor="webcamGroup"><b>Webcam Required</b></label>
                            <select
                                id="webcamGroup"
                                className="form-control"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="one-question"><b>One question at a time</b></label>
                            <select
                                id="one-question"
                                className="form-control"
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>

                            </select>
                        </div>

                        {/* Lock Questions After Answering */}
                        <div className="col-md-4">
                            <label htmlFor="lock-questions"><b>Lock Questions After Answering</b></label>
                            <select
                                id="lock-questions"
                                className="form-control"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>
            <br></br>
            <div className="card mb-3">
                <div className="card-body">
                    <label htmlFor="wd-assign-to" className="form-label">
                        <b>Assign to</b>
                    </label>
                    <div className="d-flex align-items-center border border-gray rounded">
                        <span className="border border-gray bg-light rounded p-2 m-2">
                            Everyone X
                        </span>
                    </div>
                    <div className="mb-3">
                            <label htmlFor="due"><b> Due</b></label>
                            <input
                                type="datetime-local"
                                id="due"
                                className="form-control"
                                required
                            />
                        </div>
                    


                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="available-from"><b>Available From</b></label>
                            <input
                                type="datetime-local"
                                id="available-from"
                                className="form-control"
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="Until"><b>Until</b></label>
                            <input
                                type="datetime-local"
                                id="Until"
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
            </div>



            <hr />

            <div className="d-flex justify-content-center align-items-center">
                <Link to={`/Kanbas/Courses/${'{cid}'}/Quizzes`}>
                    <button type="button" className="btn btn-secondary me-2">Cancel</button>
                </Link>
                <button type="button" className="btn btn-success">Save & Publish</button>
                <button type="button" className="btn btn-danger ms-2">Save</button>
            </div>
        </div>
    );
}
