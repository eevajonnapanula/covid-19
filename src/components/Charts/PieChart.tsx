import React, { FunctionComponent } from 'react';
import {
  VictoryTheme,
  VictoryContainer,
  VictoryPie,
  VictoryPortal,
  VictoryLabel,
  VictoryLegend,
} from 'victory';

interface PieChartProps {
  data: any;
  title: string;
}

const PieChart: FunctionComponent<PieChartProps> = ({ data, title }) => {
  //const labels = data.map((item: any) => item.x);
  return (
    <>
      <h2>{title}</h2>

      <VictoryPie
        name="bar"
        padAngle={2}
        innerRadius={100}
        data={data.filter((item: any) => item.x)}
        colorScale={['#23c9ff', '#f7b267', '#a93f55', '#6B2D5C', '#D7A7B1']}
        containerComponent={<VictoryContainer responsive={true} />}
        theme={VictoryTheme.grayscale}
        style={{ labels: { fill: '#e4e3d3' } }}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        labelComponent={
          <VictoryPortal>
            <VictoryLabel />
          </VictoryPortal>
        }
        events={[
          {
            target: 'data',
            eventHandlers: {
              onClick: () => {
                return [
                  {
                    target: 'labels',
                    mutation: props => {
                      const fill = props.style && props.style.fill;
                      return fill === '#f7b267'
                        ? null
                        : { style: { fill: '#f7b267' } };
                    },
                  },
                ];
              },
              onMouseEnter: () => {
                return [
                  {
                    target: 'labels',
                    mutation: () => {
                      return { style: { fill: '#f7b267' } };
                    },
                  },
                ];
              },
              onMouseLeave: () => {
                return [
                  {
                    target: 'labels',
                    mutation: () => {
                      return null;
                    },
                  },
                ];
              },
            },
          },
        ]}
      />
      <VictoryLegend
        name="legend"
        y={50}
        orientation="horizontal"
        gutter={20}
        data={data
          .filter((item: any) => item.x)
          .map((item: any) => {
            return { name: item.x };
          })}
        colorScale={['#23c9ff', '#f7b267', '#a93f55', '#6B2D5C', '#D7A7B1']}
        style={{ labels: { fill: '#e4e3d3' } }}
      />
    </>
  );
};

export default PieChart;
