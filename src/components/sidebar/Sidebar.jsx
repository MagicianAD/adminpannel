import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  SignalCellularAlt,
  CardTravel,
  AttachMoney,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  NoEncryption,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem ">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarListItem ">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Link
                style={{ textDecoration: "none" }}
                className="link"
                to="/users"
              >
                <PersonOutline />
                User
              </Link>
            </li>
            <li className="sidebarListItem ">
              <Link
                style={{ textDecoration: "none" }}
                className="link"
                to="/products"
              >
                <CardTravel />
                Production
              </Link>
            </li>
            <li className="sidebarListItem ">
              <SignalCellularAlt />
              Report
            </li>
            <li className="sidebarListItem ">
              <AttachMoney />
              Transaction
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutline />
              Mail
            </li>
            <li className="sidebarListItem ">
              <DynamicFeed />
              Feedback
            </li>
            <li className="sidebarListItem ">
              <ChatBubbleOutline />
              Message
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default sidebar;
