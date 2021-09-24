import "./user.css";
import React from "react";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  Publish,
} from "@material-ui/icons";

function User() {
  return (
    <div className="user">
      <div className="usertitleContainer">
        <h1 className="userTitle">Edit </h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/4823242/pexels-photo-4823242.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="userShowImg"
            />

            <div className="userShowUpTittle">
              <span className="userShowUsername">Anne Becker</span>
              <span className="userShowUserTittle"> Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="usershowtitle">Account Details</span>
            <div className="useinfoContainer">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTittle">annabeck99</span>
            </div>

            <div className="useinfoContainer">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTittle">10.10.1900</span>
            </div>
            <span className="usershowtitle">Contact Details</span>

            <div className="useinfoContainer">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTittle">annabeck99@gmail.com</span>
            </div>
            <div className="useinfoContainer">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTittle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTittle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <label> Username</label>
              <div className="userUpdateItems">
                <input
                  type="text"
                  placeholder="annaeback66"
                  className="userUpdateInput"
                ></input>
              </div>
              <label> Fullname</label>
              <div className="userUpdateItems">
                <input
                  type="text"
                  placeholder="Annae Back"
                  className="userUpdateInput"
                ></input>
              </div>
              <label> Email</label>

              <div className="userUpdateItems">
                <input
                  type="text"
                  placeholder="annaeback66@gmail.com"
                  className="userUpdateInput"
                ></input>
              </div>
              <label> Phone</label>

              <div className="userUpdateItems">
                <input
                  type="text"
                  placeholder="+19 2345 4567 890"
                  className="userUpdateInput"
                ></input>
              </div>
              <label> Address</label>

              <div className="userUpdateItems">
                <input
                  type="text"
                  placeholder="New | USA"
                  className="userUpdateInput"
                ></input>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateRight">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/4823242/pexels-photo-4823242.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                ></input>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default User;
