import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import ChartCard from './ChartCard';
import ChartTitle from './ChartTitle';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const SimpleBarChart = () => (
  <ChartCard>
    <ChartTitle>Simple Bar Chart</ChartTitle>
    <ResponsiveContainer width="99%" height="90%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }}
      >

        <Tooltip />
        <Bar dataKey="pv" fill="#7B31E8" />
        <Bar dataKey="uv" fill="#4D33F2" />
      </BarChart>
    </ResponsiveContainer>
  </ChartCard>
);

export default SimpleBarChart;
