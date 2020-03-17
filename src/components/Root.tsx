import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Footer from './Footer';
import Charts from './Charts/Charts';
import styled from 'styled-components';
import Numbers from './Numbers';
import { useQuery } from '@apollo/react-hooks';
import { GET_DATA } from '../graphql/queries';
import isToday from 'date-fns/isToday';
import { Confirmed, Death, Recovered } from '../interfaces';

interface RootProps {
  changeLocale: () => void;
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 1rem 2rem 1rem;
  width: 80%;
  @media only screen and (min-width: 1000px) {
    width: 50rem;
  }
`;

interface GroupButtonProps {
  active: boolean;
}

const GroupButton = styled.button<GroupButtonProps>`
  background-color: ${props => (props.active ? '#e4e3d3' : '#2e2d4d')};
  border: 0.125rem solid #e4e3d3;
  color: ${props => (props.active ? '#2e2d4d' : '#e4e3d3')};
  padding: 1rem;
  width: 4rem;
  &:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
    border-right: none;
  }

  &:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
    border-left: none;
  }
`;

const Root: FunctionComponent<RootProps> = ({ changeLocale }) => {
  const { locale } = useIntl();
  const { data } = useQuery(GET_DATA);
  const handleLocaleChange = () => {
    changeLocale();
  };

  return (
    <>
      <Header>
        <div>
          <GroupButton onClick={handleLocaleChange} active={locale === 'fi'}>
            FI
          </GroupButton>
          <GroupButton onClick={handleLocaleChange} active={locale === 'en'}>
            EN
          </GroupButton>
        </div>
      </Header>
      <Main>
        <h1>
          <FormattedMessage id="site.title" />
        </h1>
        {data && (
          <>
            <Numbers
              confirmed={{
                all: data.data.confirmed.length,
                today: data.data.confirmed.filter((item: Confirmed) =>
                  isToday(new Date(item.date))
                ).length,
              }}
              deaths={{
                all: data.data.deaths.length,
                today: data.data.deaths.filter((item: Death) =>
                  isToday(new Date(item.date))
                ).length,
              }}
              recovered={{
                all: data.data.recovered.length,
                today: data.data.recovered.filter((item: Recovered) =>
                  isToday(new Date(item.date))
                ).length,
              }}
            />
            <Charts data={data.data} />
          </>
        )}
      </Main>
      <Footer />
    </>
  );
};

export default Root;
