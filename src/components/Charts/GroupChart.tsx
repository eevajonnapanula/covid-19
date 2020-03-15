import React, { FunctionComponent, useState } from 'react';
import {
  VictoryTheme,
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryPortal,
  VictoryLabel,
  VictoryStack,
  VictoryLegend,
  VictoryVoronoiContainer,
} from 'victory';
import { DataInXAndY } from '../../interfaces';
import { useIntl } from 'react-intl';

interface GroupChartProps {
  data: DataInXAndY;
  title: string;
}

const getmaxConfirmedY = (labels: number[]) =>
  labels.length > 0 ? Math.max(...labels) : 0;

const GroupChart: FunctionComponent<GroupChartProps> = ({ data, title }) => {
  const { formatMessage } = useIntl();
  const labelsX = data.confirmed.map(item => item.x);
  const labelsConfirmedY = data.confirmed.map(item => item.y);
  const [date, setDate] = useState('');
  const [confirmed, setConfirmed] = useState('');
  const [deaths, setDeaths] = useState('');
  const [recovered, setRecovered] = useState('');
  const maxConfirmedY = getmaxConfirmedY(labelsConfirmedY);

  const handleActivate = (points: any) => {
    const confirmedPoint = points.find(
      (item: any) => item.childName === 'bar-confirmed'
    );
    const deathPoint = points.find(
      (item: any) => item.childName === 'bar-deaths'
    );
    const recoveredPoint = points.find(
      (item: any) => item.childName === 'bar-recovered'
    );

    setConfirmed(confirmedPoint.y);
    setDeaths(deathPoint.y);
    setRecovered(recoveredPoint.y);
    setDate(confirmedPoint.x);
  };
  return (
    <>
      <h2>{title}</h2>
      {data.confirmed.length > 0 && (
        <>
          <VictoryChart
            theme={VictoryTheme.grayscale}
            domainPadding={20}
            padding={{ bottom: 100 }}
            containerComponent={
              <VictoryVoronoiContainer
                onActivated={points => handleActivate(points)}
                voronoiDimension="x"
              />
            }
          >
            <VictoryLegend
              name="legend"
              title={`${formatMessage({ id: 'labels.date' })} ${date}`}
              orientation="vertical"
              height={50}
              gutter={10}
              data={[
                {
                  name: `${formatMessage({
                    id: 'labels.confirmed',
                  })} ${confirmed}`,
                },
                {
                  name: `${formatMessage({
                    id: 'labels.recovered',
                  })} ${deaths}`,
                },
                {
                  name: `${formatMessage({
                    id: 'labels.deaths',
                  })} ${recovered}`,
                },
              ]}
              colorScale={['#23c9ff', '#f7b267', '#a93f55']}
              style={{
                labels: { fill: '#e4e3d3', fontSize: 10 },
                title: { fill: '#e4e3d3', fontSize: 10 },
              }}
            />
            <VictoryAxis
              style={{
                axis: { stroke: '#e4e3d3' },
                grid: { stroke: 'rgba(188, 187, 174, 0.3)' },
              }}
              tickFormat={t => `${t} ${formatMessage({ id: 'labels.pcs' })}`}
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
                name="bar-confirmed"
                maxDomain={{ y: maxConfirmedY + 20 }}
                data={data.confirmed}
                animate={{
                  duration: 2000,
                }}
                style={{
                  labels: {
                    fill: '#e4e3d3',
                  },
                }}
              />
              <VictoryBar
                name="bar-deaths"
                maxDomain={{ y: maxConfirmedY + 20 }}
                data={data.deaths}
                style={{
                  labels: {
                    fill: '#e4e3d3',
                  },
                }}
                animate={{
                  duration: 2000,
                }}
              />
              <VictoryBar
                name="bar-recovered"
                maxDomain={{ y: maxConfirmedY + 20 }}
                data={data.recovered}
                style={{
                  labels: {
                    fill: '#e4e3d3',
                  },
                }}
                animate={{
                  duration: 2000,
                }}
              />
            </VictoryStack>
          </VictoryChart>
        </>
      )}
    </>
  );
};

export default GroupChart;
