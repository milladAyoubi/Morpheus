import React from "react";
import "./home.scss";
import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartBox/chartBox";
import LineChart from "../../components/lineChart/LineChart";
import DataBar1 from "../../components/dataBar/dataBar1";
import PieChartBox from "../../components/pieChart/PieChartBox";
import BarChartBox from "../../components/barChart/BarChart";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
  simpleLineChart,
  dataBarData,
} from "../../data";

const Home = () => {
  return (
    <section>
      <div className="title">
        <h1>DASHBOARD</h1>
        <p>Welcome to your dashboard!</p>
      </div>
      <div className="home">
        <div className="box box1">
          <TopBox />
        </div>
        <div className="box box2">
          <ChartBox {...chartBoxUser} />
        </div>
        <div className="box box3">
          <ChartBox {...chartBoxProduct} />
        </div>
        <div className="box box4">
          <PieChartBox />
        </div>
        <div className="box box5">
          <ChartBox {...chartBoxConversion} />
        </div>
        <div className="box box6">
          <ChartBox {...chartBoxRevenue} />
        </div>
        <div className="box box7">
          <DataBar1 {...dataBarData} />
        </div>
        <div className="box box8">
          <LineChart {...simpleLineChart} />
        </div>
        <div className="box box9">
          <BarChartBox {...barChartBoxRevenue} />
        </div>
      </div>
    </section>
  );
};

export default Home;
