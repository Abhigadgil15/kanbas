import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state) => state.accountReducer);

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {/* Render Signin link only if there's no current user */}
      {!currentUser && (
        <Link
          id="wd-course-home-link"
          to={`/Kanbas/Account/Signin`}
          className="list-group-item active border border-0"
        >
          Signin
        </Link>
      )}

      {/* Render Signup link only if there's no current user */}
      {!currentUser && (
        <Link
          id="wd-course-home-link"
          to={`/Kanbas/Account/Signup`}
          className="list-group-item text-danger border border-0"
        >
          Signup
        </Link>
      )}

      {/* Render Profile link only if there's a current user */}
      {currentUser && (
        <Link
          id="wd-course-home-link"
          to={`/Kanbas/Account/Profile`}
          className="list-group-item text-danger border border-0"
        >
          Profile
        </Link>
      )}
    </div>
  );
}
