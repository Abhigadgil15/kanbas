import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function KanbasNavigation() {
  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 110 }} // Sidebar width about 110px
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      {/* Northeastern link with logo */}
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="northeasternlogo.jpeg" width="75px" alt="Northeastern University" />
      </a>
      <br />

      {/* Account link with white icon */}
      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text-white" />
        <br />
        Account
      </Link>
      <br />

      {/* Dashboard link with red icon */}
      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>
      <br />

      {/* Courses link with red icon */}
      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>
      <br />

      {/* Calendar link with red icon */}
      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>
      <br />

      {/* Inbox link with red icon */}
      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>
      <br />

      {/* Labs/Landing Page link with red icon */}
      <Link
        to="/Labs"
        id="wd-labs-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
      <br />

      {/* GitHub link */}
      <a
        href="https://github.com/Abhigadgil15/kanbas/"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        GitHub
      </a>
    </div>
  );
}
