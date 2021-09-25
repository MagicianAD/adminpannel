import React from "react";
import "./newuser.css";
function Newuser() {
  return (
    <div className="newuser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItems">
          <label>Username</label>
          <input type="text" placeholder="Hacker" />
        </div>
        <div className="newUserItems">
          <label>Full name</label>
          <input type="text" placeholder="John smith" />
        </div>
        <div className="newUserItems">
          <label>Password</label>
          <input type="text" placeholder="*****" />
        </div>
        <div className="newUserItems">
          <label>phone</label>
          <input type="number" placeholder="+977 98576868" />
        </div>
        <div className="newUserItems">
          <label>Email</label>
          <input type="text" placeholder="Love@hotmail.com" />
        </div>
        <div className="newUserItems">
          <label>Address</label>
          <input type="text" placeholder="Nepal ktm" />
        </div>
        <div className="newUserItems">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="female">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Others</label>
          </div>
        </div>
        <div className="newUserItems">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
}
export default Newuser;
