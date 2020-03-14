import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import BarChart from './BarChart';
import PieChart from './PieChart';
import { GET_DATA } from '../../graphql/queries';
import { formatDataToXAndY } from '../../utils/dataUtils';

const Charts = () => {
  const { data } = useQuery(GET_DATA);
  const [infectionSources, setiInfectionSources] = useState([]);
  const [countries, setCountries] = useState([]);

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
    }
  }, [data]);

  const renderCharts = () => {
    return (
      <>
        <BarChart
          data={infectionSources}
          title="Confirmed cases per health care district"
        />
        <PieChart data={countries} title="Known infection source countries" />
      </>
    );
  };
  return <>{data ? renderCharts() : <div>loading</div>}</>;
};

export default Charts;
