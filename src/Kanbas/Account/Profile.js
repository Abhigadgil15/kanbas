import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input 
        id="wd-username" 
        value="alice" 
        className="form-control mb-2" 
        placeholder="username" 
      />
      <input 
        id="wd-password" 
        value="123" 
        className="form-control mb-2" 
        placeholder="password" 
        type="password" 
      />
      <input 
        id="wd-firstname" 
        value="Alice" 
        className="form-control mb-2" 
        placeholder="First Name" 
      />
      <input 
        id="wd-lastname" 
        value="Wonderland" 
        className="form-control mb-2" 
        placeholder="Last Name" 
      />
      <input 
        id="wd-dob" 
        value="2000-01-01" 
        className="form-control mb-2" 
        type="date" 
      />
      <input 
        id="wd-email" 
        value="alice@wonderland" 
        className="form-control mb-2" 
        type="email" 
      />
      <select 
        id="wd-role" 
        className="form-control mb-2"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link 
        className="btn btn-primary w-100" 
        to="/Kanbas/Account/Signin"
      >
        Save
      </Link>
    </div>
  );
}

export default Profile;
