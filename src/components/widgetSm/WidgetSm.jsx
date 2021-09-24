import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widgetsm.css";

function WidgetSm() {
  return (
    <div className="widgetsm">
      <span className="widgetSmallTitle">User tile</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/4823242/pexels-photo-4823242.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260 "
            alt=" "
            className="widgetsmimage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Aarati</span>
            <span className="widgetSmTittlename">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetsmicon" />
            Disable
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/4823242/pexels-photo-4823242.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260 "
            alt=" "
            className="widgetsmimage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Aarati</span>
            <span className="widgetSmTittlename">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetsmicon" />
            Disable
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/4823242/pexels-photo-4823242.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260 "
            alt=" "
            className="widgetsmimage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Aarati</span>
            <span className="widgetSmTittlename">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetsmicon" />
            Disable
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/4823242/pexels-photo-4823242.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260 "
            alt=" "
            className="widgetsmimage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Aarati</span>
            <span className="widgetSmTittlename">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetsmicon" />
            Disable
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/4823242/pexels-photo-4823242.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260 "
            alt=" "
            className="widgetsmimage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Aarati</span>
            <span className="widgetSmTittlename">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetsmicon" />
            Disable
          </button>
        </li>
      </ul>
    </div>
  );
}
export default WidgetSm;
