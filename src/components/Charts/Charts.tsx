import React, { useState, useEffect, FunctionComponent } from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
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
  const [countries, setCountries] = useState<XAndY[]>([]);
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
      const formattedCountries = formatDataToXAndY(
        data.confirmed,
        'infectionSourceCountry'
      );
      setCountries(formattedCountries);
      const formattedInfectionsPerDay = {
        confirmed: formatDatesToXAndY(data.confirmed),
        deaths: formatDatesToXAndY(data.deaths),
        recovered: formatDatesToXAndY(data.recovered),
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
        <PieChart
          data={countries}
          title={formatMessage({ id: 'charts.confirmedPerCountry' })}
        />
      </>
    );
  };
  return <>{data ? renderCharts() : <div>loading</div>}</>;
};

export default Charts;
