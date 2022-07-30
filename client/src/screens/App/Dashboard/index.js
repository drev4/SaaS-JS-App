import React from 'react';
import styled from 'styled-components';
import Stats from './stats';
import ActivityList from './activityList';
import { colors, breakpoints } from '../../../styles/theme';
import LineBarAreaComposedChart from './Charts/LineBarAreaComposedChart';
import StackedChart from './Charts/StackedChart';
import AreaChartFillByValue from './Charts/AreaChartFillByValue';
import SimpleBarChart from './Charts/SimpleBarChart';

const Title = styled.h1`
  font-weight: 600;
  color: ${colors.gray900};
  font-size: 1.5rem;
`;

const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${breakpoints.large}) {
    grid-template-columns: 1fr;
    align-items: center;
  }
  grid-auto-flow: row;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  margin-top: 2rem;
`;
const SingleChartContainer = styled.div`
    display: grid;
  grid-template-columns: 1fr;
  @media (max-width: ${breakpoints.large}) {
    grid-template-columns: 1fr;
    align-items: center;
  }
  grid-auto-flow: row;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  margin-top: 2rem;
`
const divStyle = {
    maxWidth: '1440px',
    margin: '0 auto'
}
const Dashboard = () => {
  return (
    <div style={divStyle}>
      <Title>Sales</Title>
      <Stats />
      <SingleChartContainer>
        <StackedChart />
      </SingleChartContainer>
        <ChartsContainer>
        <AreaChartFillByValue />
        <SimpleBarChart />
      </ChartsContainer>
      <ActivityList />
    </div>
  );
};
export default Dashboard;
