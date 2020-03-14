import React, { useState, useEffect, FunctionComponent } from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import { formatDataToXAndY, formatDatesToXAndY } from '../../utils/dataUtils';
import { useIntl } from 'react-intl';

interface ChartsProps {
  data: any;
}

const Charts: FunctionComponent<ChartsProps> = ({ data }) => {
  const { formatMessage } = useIntl();

  const [infectionSources, setiInfectionSources] = useState([]);
  const [countries, setCountries] = useState([]);
  const [infectionsPerDay, setInfectionsPerDay] = useState<any>([]);

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
      const formattedInfectionsPerDay = formatDatesToXAndY(data.confirmed);

      setInfectionsPerDay(formattedInfectionsPerDay);
    }
  }, [data]);

  const renderCharts = () => {
    return (
      <>
        <BarChart
          data={infectionSources}
          title={formatMessage({ id: 'charts.confirmedPerDistrict' })}
        />
        <PieChart
          data={countries}
          title={formatMessage({ id: 'charts.confirmedPerCountry' })}
        />
        <LineChart
          data={infectionsPerDay}
          title={formatMessage({ id: 'charts.infectionsPerDay' })}
        />
      </>
    );
  };
  return <>{data ? renderCharts() : <div>loading</div>}</>;
};

export default Charts;
