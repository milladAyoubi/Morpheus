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
    <div className="chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={400}
          height={400}
          data={props.chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
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
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#67D4BA" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default lineChart;
