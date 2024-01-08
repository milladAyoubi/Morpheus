import React from "react";
import "./lineChart.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  chartData: object[];
};

const lineChart = (props: Props) => {
  return (
    <div className="lineChartBox">
      <div className="lineChartText">
        <h3>Revenue Generated</h3>
        <h1>$59,453.32</h1>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={400}
            height={400}
            data={props.chartData}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#FFBB28"
              activeDot={{ r: 5 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#67D4BA" />
            <Line
              type="monotone"
              dataKey="amt"
              stroke="#8884d8"
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default lineChart;
