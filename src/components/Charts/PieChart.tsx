import React, { FunctionComponent } from 'react';
import { VictoryTheme, VictoryContainer, VictoryPie } from 'victory';

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
        data={data.filter((item: any) => item.x)}
        colorScale={['#23c9ff', '#f7b267', '#a93f55', '#6B2D5C', '#D7A7B1']}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        containerComponent={<VictoryContainer responsive={true} />}
        theme={VictoryTheme.grayscale}
        style={{ labels: { fill: '#e4e3d3' } }}
      />
    </>
  );
};

export default PieChart;
