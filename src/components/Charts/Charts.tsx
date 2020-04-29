import React, { useState, useEffect, FunctionComponent } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import {
  formatDataToXAndY,
  formatDatesToXAndY,
  formatTotalInfections,
} from '../../utils/dataUtils';
import { useIntl } from 'react-intl';
import GroupChart from './GroupChart';
import { Data, XAndY, DataInXAndY } from '../../interfaces';

interface ChartsProps {
  data: Data;
}

const Charts: FunctionComponent<ChartsProps> = ({ data }) => {
  const { formatMessage } = useIntl();

  const [infectionSources, setiInfectionSources] = useState<XAndY[]>([]);
  const [infectionsPerDay, setInfectionsPerDay] = useState<DataInXAndY>({
    confirmed: [],
    deaths: [],
    recovered: [],
  });
  const [totalInfectionsPerDay, setTotalInfectionsPerDay] = useState<XAndY[]>(
    []
  );

  useEffect(() => {
    if (data) {
      const formattedDistricts = formatDataToXAndY(
        data.confirmed,
        'healthCareDistrict'
      );
      setiInfectionSources(formattedDistricts);
      const formattedInfectionsPerDay = {
        confirmed: formatDatesToXAndY(data.confirmed, data.confirmed[0].date),
        deaths: formatDatesToXAndY(data.deaths, data.confirmed[0].date),
        recovered: formatDatesToXAndY(data.recovered, data.confirmed[0].date),
      };
      setInfectionsPerDay(formattedInfectionsPerDay);
      const formattedTotalInfectionsPerDay = formatTotalInfections(
        data.confirmed
      );
      setTotalInfectionsPerDay(formattedTotalInfectionsPerDay);
    }
  }, [data]);

  const renderCharts = () => {
    return (
      <>
        <LineChart
          data={totalInfectionsPerDay}
          title={formatMessage({ id: 'charts.totalInfectionsPerDay' })}
        />
        <GroupChart
          data={infectionsPerDay}
          title={formatMessage({ id: 'charts.infectionsPerDay' })}
        />
        <BarChart
          data={infectionSources}
          title={formatMessage({ id: 'charts.confirmedPerDistrict' })}
        />
      </>
    );
  };
  return <>{data ? renderCharts() : <div>loading</div>}</>;
};

export default Charts;
