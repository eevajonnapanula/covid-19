import React, { FunctionComponent } from 'react';
import {
  VictoryTheme,
  VictoryChart,
  VictoryLine,
  VictoryLabel,
  VictoryAxis,
  VictoryContainer,
  VictoryPortal,
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
        <VictoryLine
          interpolation="natural"
          data={data}
          style={{
            parent: {
              border: '1px solid #ccc',
            },
            data: { stroke: '#23c9ff' },
            labels: {
              fontSize: 15,
              fill: '#e4e3d3',
              padding: 15,
            },
          }}
          animate={{
            duration: 2000,
          }}
          padding={{ top: 20, bottom: 60 }}
        />
      </VictoryChart>
    </>
  );
};

export default LineChart;
