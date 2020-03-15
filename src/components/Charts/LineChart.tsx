import React, { FunctionComponent } from 'react';
import {
  VictoryTheme,
  VictoryChart,
  VictoryLine,
  VictoryLabel,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryPortal,
  VictoryTooltip,
  VictoryScatter,
} from 'victory';

interface DataType {
  x: string;
  y: number;
}

interface LineChartProps {
  data: any;
  title: string;
}

const LineChart: FunctionComponent<LineChartProps> = ({ data, title }) => {
  const labels = data.map((item: any) => item.y);

  return (
    <>
      <h2>{title}</h2>
      <VictoryChart
        theme={VictoryTheme.grayscale}
        domainPadding={20}
        containerComponent={<VictoryVoronoiContainer responsive={true} />}
        padding={{ bottom: 100 }}
      >
        <VictoryAxis
          style={{
            axis: { stroke: '#e4e3d3' },
            grid: { stroke: 'rgba(188, 187, 174, 0.3)' },
          }}
          tickFormat={t => `${t} kpl`}
          dependentAxis={true}
          tickLabelComponent={
            <VictoryPortal>
              <VictoryLabel style={{ fontSize: '12px', fill: '#e4e3d3' }} />
            </VictoryPortal>
          }
        />
        <VictoryAxis
          style={{ axis: { stroke: '#e4e3d3' } }}
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
          labels={labels}
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
          labelComponent={
            <VictoryTooltip
              pointerLength={0}
              flyoutStyle={{
                fill: 'transparent',
                stroke: 'transparent',
                color: '#e4e3d3',
              }}
              width={5}
              height={5}
            />
          }
        />
        <VictoryScatter
          animate={{
            duration: 2000,
          }}
          data={data}
          size={2}
          style={{ data: { fill: '#23c9ff' } }}
        />
      </VictoryChart>
    </>
  );
};

export default LineChart;
