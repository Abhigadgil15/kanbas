import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckMark from "../Modules/GreenCheckMark";
import { deleteAssignment } from "./reducer";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
export default function LessonControlButtons({assignmentId}) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteAssignment(assignmentId)); // Dispatch deleteAssignment with the ID
      };
  return (
    <div className="float-end">
      <GreenCheckMark/>
      <FaTrash className="text-danger ms-3 fs-4 me-2 mb-1" onClick={handleDelete}/>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
