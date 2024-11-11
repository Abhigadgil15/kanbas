import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState({
    username: '',
    password: '',
    verifyPassword: '',
    firstName: '',
    lastName: '',
    dob: '',
    email: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kanbas/Account/Profile");
  };

  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="form-control mb-2 wd-username"
        placeholder="username"
      />
      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        className="form-control mb-2 wd-password"
        placeholder="password"
      />
      <input
        value={user.verifyPassword}
        onChange={(e) => setUser({ ...user, verifyPassword: e.target.value })}
        type="password"
        className="form-control mb-2 wd-verify-password"
        placeholder="verify password"
      />
      <input
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        className="form-control mb-2 wd-firstname"
        placeholder="First Name"
      />
      <input
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        className="form-control mb-2 wd-lastname"
        placeholder="Last Name"
      />
      <input
        value={user.dob}
        onChange={(e) => setUser({ ...user, dob: e.target.value })}
        type="date"
        className="form-control mb-2 wd-dob"
      />
      <input
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="form-control mb-2 wd-email"
        placeholder="Email"
      />
      <button onClick={signup} className="btn btn-primary w-100 wd-signup-btn mb-2">
        Sign up
      </button>
      <Link to="/Kanbas/Account/Signin" className="w-100 btn btn-secondary mt-2">
        Sign in
      </Link>
    </div>
  );
}
