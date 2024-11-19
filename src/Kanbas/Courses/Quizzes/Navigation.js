import { useState } from "react";
import  { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Navigation() {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('details');
    const { cid } = useParams();
    // Function to switch tabs
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="d-flex mb-3">
            <Link to={`/Kanbas/Courses/${cid}/Quizzes/details`}></Link>
            <button
                onClick={() => handleTabClick('details')}
                className={`border-0 py-2 ${activeTab === 'details'
                        ? 'bg-white text-black font-weight-bold'
                        : 'text-danger bg-transparent'
                    }`}
            >
                Details
            </button>
            <Link to={`/Kanbas/Courses/${cid}/Quizzes/123/questions`}>
                <button
                    onClick={() => handleTabClick('questions')}
                    className={`border-0 px-4 py-2 ${activeTab === 'questions'
                            ? 'bg-white text-black font-weight-bold'
                            : 'text-danger bg-transparent'
                        }`}
                >
                    Questions
                </button>
            </Link>
        </div>
    );
}
