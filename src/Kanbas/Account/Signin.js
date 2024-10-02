import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input id="wd-username" className="form-control mb-2" placeholder="username" /> 
      <input id="wd-password" className="form-control mb-2" placeholder="password" type="password" /> 
      <Link id="wd-signin-btn" className="btn btn-primary w-100" to="/Kanbas/Dashboard"> Sign in </Link>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
    </div>
);
}

export default Signin;