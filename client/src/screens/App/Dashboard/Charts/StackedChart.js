import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import styled from 'styled-components';
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
const tooltipStyle = {
  borderRadius: '10px',
  border: 'none',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
};
const testing = (value) => {
  return data[value].name
}
const StackedChart = () => (
  <ChartCard>
    <ChartTitle>Stacked Area Chart</ChartTitle>
    <ResponsiveContainer  width="99%" height="90%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }}
      >
        <Tooltip contentStyle={tooltipStyle} labelFormatter={testing}/>
        <Area type="monotone" dataKey="uv" stackId="1" stroke="#7B31E8" fill="#7B31E8" />
        <Area type="monotone" dataKey="pv" stackId="1" stroke="#4D33F2" fill="#4D33F2" />
        <Area type="monotone" dataKey="amt" stackId="1" stroke="#337FF2" fill="#337FF2" />
      </AreaChart>
    </ResponsiveContainer>
  </ChartCard>
);

export default StackedChart;
