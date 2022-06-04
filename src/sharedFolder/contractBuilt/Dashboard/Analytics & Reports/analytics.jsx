import React from "react";
import Analytics_Card from "./analytics_Card";
import "./analytics_card.css";
import Bottom_Chart from "./Bottom_Chart";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import Bar_chart from './Bar_chart';
import Pie_chart from './Pie_chart';
import Line_chart from './Line_chart';;

const analytics = () => {
  return (
    <div className="analytics">
      <div className="analytics_left">
        <div class="topnav">
          <div>
            {" "}
            <AiOutlineMenu /> &nbsp; &nbsp;{" "}
            <span className="title_topnav">analytics & reports</span>
          </div>
          <div class="topnav__search">
            <input type="search" placeholder="Search here.." />
            <AiOutlineSearch className="Ai" />
          </div>
        </div>

        <div className="card">
          <Analytics_Card />
        </div>
        <div className="bottom-chart">
          <Bottom_Chart />
        </div>
      </div>
      <div className="analytics_right">
        <div className="analytics_right_top">
          <h1>
            Access all features at <br></br> $42 per/month
          </h1>
          <p>
            Your all compliances solutions are here. Unlock all features to test
            our maximum potential
          </p>
        </div>

        <div className="bottom_chart">
        <Bar_chart/>
        
        </div>
        <div className="bottom_chart">
     <Line_chart/>
        </div>
      </div>
    </div>
  );
};

export default analytics;
