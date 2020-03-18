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
  @media only screen and (min-width: 1000px) {
    width: 50rem;
  }
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

const ButtonGroup = styled.div`
  margin: 0 1rem 0 1rem;
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

const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.5rem;
  align-items: center;
  background-color: #222139;
  padding: 2rem;
  width: 80%;
  margin: 2rem 1rem 2rem 1rem;
  @media only screen and (min-width: 768px) {
    width: 26rem;
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
        <ButtonGroup>
          <GroupButton onClick={handleLocaleChange} active={locale === 'fi'}>
            FI
          </GroupButton>
          <GroupButton onClick={handleLocaleChange} active={locale === 'en'}>
            EN
          </GroupButton>
        </ButtonGroup>
      </Header>
      <Main>
        <h1>
          <FormattedMessage id="site.title" />
        </h1>
        <NotificationBox>
          <p>
            <FormattedMessage id="site.notification" />
          </p>
          <p>
            {locale === 'en' ? (
              <a href="https://yle.fi/uutiset/osasto/news/hus_coronavirus_testing_to_focus_on_health_professionals/11257869">
                HUS: Coronavirus testing to focus on health professionals - YLE
              </a>
            ) : (
              <a href="https://www.hs.fi/kotimaa/art-2000006440293.html">
                Testaus­tavan muutos Husissa vähensi havaittuja tartuntoja
                sunnuntaina – Suomi tartunnoissa yhä Pohjois­maiden tahdissa -
                HS
              </a>
            )}
          </p>
        </NotificationBox>
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
