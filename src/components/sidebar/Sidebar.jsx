import React from "react";
import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarlist">Dashboard</h3>
          <li className="sideListItems">
            <LineStyle />
            home
          </li>
          <li className="sideListItems">
            <Timeline />
            Analytics
          </li>
          <li className="sideListItems">
            <TrendingUp />
            Sales
          </li>
        </div>
      </div>
    </div>
  );
}
export default sidebar;
