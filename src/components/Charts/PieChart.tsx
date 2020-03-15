import React, { FunctionComponent } from 'react';
import {
  VictoryTheme,
  VictoryContainer,
  VictoryPie,
  VictoryPortal,
  VictoryLabel,
  VictoryLegend,
} from 'victory';
import { XAndY } from '../../interfaces';

interface PieChartProps {
  data: XAndY[];
  title: string;
}

const PieChart: FunctionComponent<PieChartProps> = ({ data, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <VictoryLegend
        name="legend"
        orientation="horizontal"
        gutter={20}
        data={data
          .filter(item => item.x)
          .map(item => {
            return { name: `${item.x}: ${item.y}` };
          })}
        colorScale={[
          '#23c9ff',
          '#f7b267',
          '#a93f55',
          '#6B2D5C',
          '#D7A7B1',
          '#476774',
          '#FBF2C0',
        ]}
        style={{ labels: { fill: '#e4e3d3' } }}
        itemsPerRow={5}
        height={50}
      />
      <VictoryPie
        name="bar"
        padAngle={2}
        innerRadius={100}
        data={data.filter(item => item.x)}
        colorScale={[
          '#23c9ff',
          '#f7b267',
          '#a93f55',
          '#6B2D5C',
          '#D7A7B1',
          '#476774',
          '#FBF2C0',
        ]}
        containerComponent={<VictoryContainer responsive={true} />}
        theme={VictoryTheme.grayscale}
        style={{ labels: { fill: 'transparent' } }}
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
                      return fill === 'transparent'
                        ? { style: { fill: '#e4e3d3' } }
                        : { style: { fill: 'transparent' } };
                    },
                  },
                ];
              },
              onMouseOver: () => {
                return [
                  {
                    target: 'labels',
                    mutation: () => {
                      return { style: { fill: '#e4e3d3' } };
                    },
                  },
                ];
              },
              onMouseLeave: () => {
                return [
                  {
                    target: 'labels',
                    mutation: () => {
                      return { style: { fill: 'transparent' } };
                    },
                  },
                ];
              },
            },
          },
        ]}
      />
    </>
  );
};

export default PieChart;
