import React from "react";
import "./widgetlg.css";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgitLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetlg">
      <h3 className="widgetLgTitle"> Latest Transation</h3>
      <table className="widgetLgTable">
        <tr className="widgetLGtr">
          <th className="widgetLgHeading">Username</th>
          <th className="widgetLgHeading">Date</th>
          <th className="widgetLgHeading">Amount</th>
          <th className="widgetLgHeading">Status</th>
        </tr>
        <tr className="widgetLgtr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4823242/pexels-photo-4823242.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="widgetLgImg"
            ></img>
          </td>
          <td className="WidgetLgDate">20 june</td>
          <td className="WidgetLgAmount">12</td>
          <td className="WidgetLgStauts">
            <Button type="Approved"></Button>
          </td>
        </tr>
        <tr className="widgetLgtr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4823242/pexels-photo-4823242.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="widgetLgImg"
            ></img>
          </td>
          <td className="WidgetLgDate">20 june</td>
          <td className="WidgetLgAmount">12</td>
          <td className="WidgetLgStauts">
            <Button type="Decilne"></Button>
          </td>
        </tr>
        <tr className="widgetLgtr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4823242/pexels-photo-4823242.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="widgetLgImg"
            ></img>
          </td>
          <td className="WidgetLgDate">20 june</td>
          <td className="WidgetLgAmount">12</td>
          <td className="WidgetLgStauts">
            <Button type="Pending"></Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default WidgetLg;
