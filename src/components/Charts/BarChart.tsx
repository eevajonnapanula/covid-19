import React, { FunctionComponent } from 'react';
import {
  VictoryTheme,
  VictoryChart,
  VictoryBar,
  VictoryLabel,
  VictoryAxis,
  VictoryContainer,
  VictoryPortal,
} from 'victory';
import styled from 'styled-components';

interface BarChartProps {
  data: any;
  title: string;
}

const ChartComponentWrapper = styled.div`
  margin-bottom: 3rem;
`;

const BarChart: FunctionComponent<BarChartProps> = ({ data, title }) => {
  const labels = data.map((item: any) => item.x);

  return (
    <ChartComponentWrapper>
      <h2>{title}</h2>
      <VictoryChart
        theme={VictoryTheme.grayscale}
        domainPadding={20}
        containerComponent={<VictoryContainer responsive={true} />}
      >
        <VictoryAxis
          dependentAxis={true}
          tickLabelComponent={
            <VictoryPortal>
              <VictoryLabel style={{ fontSize: '12px', fill: '#e4e3d3' }} />
            </VictoryPortal>
          }
        />
        <VictoryAxis
          tickValues={labels}
          tickLabelComponent={
            <VictoryPortal>
              <VictoryLabel
                style={{ textAnchor: 'end', fontSize: '12px', fill: '#e4e3d3' }}
                angle={-75}
              />
            </VictoryPortal>
          }
        />
        <VictoryBar
          data={data}
          style={{
            parent: {
              border: '1px solid #ccc',
            },
            data: { fill: '#23c9ff' },
            labels: {
              fontSize: 15,
              fill: '#e4e3d3',
              padding: 15,
            },
          }}
          animate={{
            duration: 2000,
          }}
          labelComponent={<VictoryLabel />}
        />
      </VictoryChart>
    </ChartComponentWrapper>
  );
};

export default BarChart;
