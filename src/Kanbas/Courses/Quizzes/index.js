// import React, { useEffect } from "react";
// import { BsGripVertical } from "react-icons/bs";
// import QuizSearch from "./QuizSearch";
// import QuizControlButtons from "./QuizControlButtons";
// import { RiArrowDownSFill } from "react-icons/ri";
// import { MdOutlineAssignment } from "react-icons/md";
// import { useParams } from "react-router";
// import { useSelector, useDispatch } from "react-redux";
// import IndividualQuiz from "./IndividualQuiz";
// import { setQuizzes } from "./reducer";
// import * as coursesClient from "../client";
// import { fetchQuizzes } from "./reducer";

// export default function Quizzes() {
//   const dispatch = useDispatch();
//   const { cid } = useParams();
//   const { quizzes } = useSelector((state) => state.quizReducer); 
//   const { currentUser } = useSelector((state) => state.accountReducer); // Get currentUser from Redux

//   const fetchAllQuizzes = async () => {
//     const quizzes = await coursesClient.findQuizzesForCourse(cid);
//     console.log(quizzes); 
//     dispatch(setQuizzes(quizzes));
//   }

//   useEffect(() => {
//     fetchAllQuizzes();
//   }, []);

//   // useEffect(() => {
//   //   dispatch(fetchQuizzes(cid));
//   // }, [dispatch, cid]);

//   return (
//     <div className="me-3">
//       <QuizSearch />
//       <br />
//       <ul id="wd-quizzes" className="list-group rounded-0">
//         <li className="wd-quiz list-group-item p-0 mb-5 fs-5">
//           <div className="d-flex align-items-center justify-content-between wd-quizzes-title p-3 ps-2 bg-secondary">
//             <div>
//               <BsGripVertical className="me-2 fs-3" />
//               <RiArrowDownSFill className="me-2" />
//               <b>QUIZZES</b>
//             </div>
//             <QuizControlButtons />
//           </div>
//           <ul className="wd-quiz-list list-group rounded-0">
//             {quizzes.map((quiz) => (
//                 <li key={quiz._id} className="wd-quiz-list-item list-group-item p-3 ps-2">
//                   <div className="d-flex align-items-center">
//                     <BsGripVertical className="me-2 fs-3" />
//                     <MdOutlineAssignment className="me-3 text-success" />
//                     <span>
//                       {currentUser.role === "FACULTY" ? (
//                         <a
//                           className="wd-quiz-link text-dark text-decoration-none fw-bold"
//                           href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
//                         >
//                           {quiz.title}
//                         </a>
//                       ) : (
//                         <span className="text-dark fw-bold">{quiz.title}</span> // Display title as plain text for non-faculty
//                       )}
//                       <br />
//                       <span className="text-danger">Multiple Modules</span> |
//                       <b> Not available until</b> {quiz.notAvailableUntil} |{" "}
//                       <b>Due</b> {quiz.due} | {quiz.points} pts
//                     </span>
//                     <span className="ms-auto">
//                       {currentUser.role === "FACULTY" && (
//                         <IndividualQuiz quizId={quiz._id} />
//                       )} 
//                     </span>
//                   </div>
//                 </li>
//               ))}
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }
