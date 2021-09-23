import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Home.css";
import Chart from "../../components/chart/Chart.jsx";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        grid
        title="User Analytics"
        data={userData}
        datakey="Active user"
      />
      <div className="HomeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
