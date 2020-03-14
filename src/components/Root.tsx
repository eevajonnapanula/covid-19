import React, { FunctionComponent, Dispatch } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Footer from './Footer';
import Charts from './Charts/Charts';
import styled from 'styled-components';
import Numbers from './Numbers';
import { useQuery } from '@apollo/react-hooks';
import { GET_DATA } from '../graphql/queries';

interface RootProps {
  changeLocale: Dispatch<React.SetStateAction<'en' | 'fi'>>;
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
    changeLocale(locale === 'en' ? 'fi' : 'en');
  };

  return (
    <>
      <Header>
        <div>
          <GroupButton onClick={handleLocaleChange} active={locale === 'en'}>
            EN
          </GroupButton>
          <GroupButton onClick={handleLocaleChange} active={locale === 'fi'}>
            FI
          </GroupButton>
        </div>
      </Header>
      <Main>
        <h1>
          <FormattedMessage id="site.title" />
        </h1>
        <Numbers
          confirmed={{ all: data.confirmed.length, today: 2 }}
          deaths={{ all: data.deaths.length, today: 0 }}
          recovered={{ all: data.recovered.length, today: 0 }}
        />
        <Charts data={data} />
      </Main>
      <Footer />
    </>
  );
};

export default Root;
