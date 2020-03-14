import React, { FunctionComponent } from 'react';
import {
  VictoryTheme,
  VictoryChart,
  VictoryBar,
  VictoryLabel,
  VictoryAxis,
  VictoryContainer,
} from 'victory';

interface LineChartProps {
  data: any;
  title: string;
}

const LineChart: FunctionComponent<LineChartProps> = ({ data, title }) => {
  const labels = data.map((item: any) => item.x);

  return (
    <>
      <h2>{title}</h2>
      <VictoryChart
        theme={VictoryTheme.grayscale}
        domainPadding={20}
        containerComponent={<VictoryContainer responsive={true} />}
      >
        <VictoryAxis
          dependentAxis={true}
          tickLabelComponent={
            <VictoryLabel style={{ fontSize: '12px', fill: '#e4e3d3' }} />
          }
        />
        <VictoryAxis
          tickValues={labels}
          tickLabelComponent={
            <VictoryLabel
              style={{ textAnchor: 'end', fontSize: '12px', fill: '#e4e3d3' }}
              angle={-75}
            />
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
    </>
  );
};

export default LineChart;
