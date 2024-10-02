import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckMark from "./GreenCheckMark";
import { BsPlus } from "react-icons/bs";
export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckMark />
      <BsPlus/>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
