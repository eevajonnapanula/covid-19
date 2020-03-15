import React, { FunctionComponent, useState } from 'react';
import {
  VictoryTheme,
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryContainer,
  VictoryPortal,
  VictoryLabel,
  VictoryStack,
  VictoryLegend,
} from 'victory';
import { DataInXAndY } from '../../interfaces';

interface GroupChartProps {
  data: DataInXAndY;
  title: string;
}

const getmaxConfirmedY = (labels: number[]) =>
  labels.length > 0 ? Math.max(...labels) : 0;

const GroupChart: FunctionComponent<GroupChartProps> = ({ data, title }) => {
  const [currentValues, setCurrentValues] = useState({
    confirmed: undefined,
    deaths: undefined,
    recovered: undefined,
  });
  const labelsX = data.confirmed.map(item => item.x);
  const labelsConfirmedY = data.confirmed.map(item => item.y);
  const labelsDeathsY = data.deaths.map(item => item.y);
  const labelsRecoveredY = data.recovered.map(item => item.y);

  const maxConfirmedY = getmaxConfirmedY(labelsConfirmedY);

  return (
    <>
      <h2>{title}</h2>
      {data.confirmed.length > 0 && (
        <>
          <VictoryChart
            theme={VictoryTheme.grayscale}
            domainPadding={20}
            containerComponent={<VictoryContainer responsive={true} />}
            padding={{ bottom: 100 }}
          >
            <VictoryLegend
              name="legend"
              orientation="vertical"
              gutter={10}
              data={[
                {
                  name: `Confirmed ${
                    !!currentValues.confirmed ? currentValues.confirmed : ''
                  }`,
                },
                {
                  name: `Recovered ${
                    !!currentValues.recovered ? currentValues.recovered : ''
                  }`,
                },
                {
                  name: `Deaths ${
                    !!currentValues.deaths ? currentValues.deaths : ''
                  }`,
                },
              ]}
              colorScale={['#23c9ff', '#f7b267', '#a93f55']}
              style={{ labels: { fill: '#e4e3d3', fontSize: 10 } }}
            />
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
              tickValues={labelsX}
              style={{ axis: { stroke: '#e4e3d3' } }}
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
            <VictoryStack
              colorScale={[
                '#23c9ff',
                '#a93f55',
                '#f7b267',

                '#6B2D5C',
                '#D7A7B1',
              ]}
            >
              <VictoryBar
                maxDomain={{ y: maxConfirmedY + 20 }}
                data={data.confirmed}
                labels={labelsConfirmedY.map(item => item.toString())}
                style={{
                  labels: {
                    fill: 'none',
                  },
                }}
                animate={{
                  duration: 2000,
                }}
                labelComponent={<VictoryLabel dy={0} />}
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
                              return fill === '#23c9ff'
                                ? { style: { fill: 'transparent' } }
                                : { style: { fill: '#23c9ff' } };
                            },
                          },
                        ];
                      },
                      onMouseEnter: () => {
                        return [
                          {
                            target: 'labels',
                            mutation: () => {
                              return { style: { fill: '#23c9ff' } };
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
              <VictoryBar
                maxDomain={{ y: maxConfirmedY + 20 }}
                data={data.deaths}
                labels={labelsDeathsY.map(item => item.toString())}
                style={{
                  labels: {
                    fill: 'none',
                  },
                }}
                animate={{
                  duration: 2000,
                }}
                labelComponent={<VictoryLabel dy={0} />}
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
                              return fill === '#a93f55'
                                ? { style: { fill: 'transparent' } }
                                : { style: { fill: '#a93f55' } };
                            },
                          },
                        ];
                      },
                      onMouseEnter: () => {
                        return [
                          {
                            target: 'labels',
                            mutation: () => {
                              return { style: { fill: '#a93f55' } };
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
              <VictoryBar
                maxDomain={{ y: maxConfirmedY + 20 }}
                data={data.recovered}
                labels={labelsRecoveredY.map(item => item.toString())}
                style={{
                  labels: {
                    fill: 'none',
                  },
                }}
                animate={{
                  duration: 2000,
                }}
                labelComponent={<VictoryLabel dy={0} />}
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
                                ? { style: { fill: 'transparent' } }
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
                              return { style: { fill: 'transparent' } };
                            },
                          },
                        ];
                      },
                    },
                  },
                ]}
              />
            </VictoryStack>
          </VictoryChart>
        </>
      )}
    </>
  );
};

export default GroupChart;
