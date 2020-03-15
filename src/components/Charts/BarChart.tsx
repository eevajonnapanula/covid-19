import React, { FunctionComponent } from 'react';
import {
  VictoryTheme,
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryContainer,
  VictoryPortal,
  VictoryLabel,
} from 'victory';

interface BarChartProps {
  data: any;
  title: string;
}

const BarChart: FunctionComponent<BarChartProps> = ({ data, title }) => {
  const labelsX = data.map((item: any) => item.x);
  const labelsY = data.map((item: any) => item.y);

  const maxY = labelsY.length > 0 ? Math.max(...labelsY) : 0;

  return (
    <>
      <h2>{title}</h2>
      {data.length > 0 && (
        <>
          <VictoryChart
            theme={VictoryTheme.grayscale}
            domainPadding={20}
            containerComponent={<VictoryContainer responsive={true} />}
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
              tickValues={labelsX}
              tickLabelComponent={
                <VictoryPortal>
                  <VictoryLabel
                    style={{
                      textAnchor: 'end',
                      fontSize: '12px',
                      fill: '#e4e3d3',
                    }}
                    angle={-75}
                  />
                </VictoryPortal>
              }
            />
            <VictoryBar
              maxDomain={{ y: maxY + 20 }}
              data={data}
              labels={labelsY}
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
              labelComponent={<VictoryLabel dy={0} />}
            />
          </VictoryChart>
        </>
      )}
    </>
  );
};

export default BarChart;
