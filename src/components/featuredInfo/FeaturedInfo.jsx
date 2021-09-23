import React from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenu</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$346</span>
          <span className="FetauredMoneyRate">
            -11
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub"> Compared to Last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sale</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$346</span>
          <span className="FetauredMoneyRate">
            -1
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub"> Compared to Last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$346</span>
          <span className="FetauredMoneyRate">
            +2.4
            <ArrowUpward className="featuredIcon " />
          </span>
        </div>
        <span className="featuredSub"> Compared to Last month</span>
      </div>
    </div>
  );
}
export default FeaturedInfo;
