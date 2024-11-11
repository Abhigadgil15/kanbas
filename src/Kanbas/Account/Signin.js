import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "iron_man",
    password: "stark123"
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    const user = await client.signin(credentials);

    // Log the user object to check if login was successful
    console.log("User logged in:", user);

    if (!user) {
      console.log("Login failed");
      return;
    }

    // Log current user before dispatching
    console.log("Current user before dispatch:", user);

    dispatch(setCurrentUser(user));

    // Log after navigating
    console.log("Navigating to Dashboard");
    navigate("/Kanbas/Dashboard/");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="form-control mb-2"
        placeholder="username"
        id="wd-username"
      />
      <input
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="form-control mb-2"
        placeholder="password"
        type="password"
        id="wd-password"
      />
      <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100">
        {" "}
        Sign in{" "}
      </button>
      <Link
        id="wd-signup-link"
        className="btn btn-primary w-100 mt-2"
        to="/Kanbas/Account/Signup"
      >
        {" "}
        Sign up{" "}
      </Link>
    </div>
  );
}
