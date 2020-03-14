import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Footer from './Footer';
import Charts from './Charts/Charts';
import NumberBox from './NumberBox';
import styled from 'styled-components';

const Rows = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Root = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <Main>
        <h1>
          <FormattedMessage id="site.title" />
        </h1>
        <Rows>
          <h2>
            <FormattedMessage id="site.titles.confirmed" />
          </h2>
          <Row>
            <NumberBox
              number="155"
              label={formatMessage({ id: 'numbers.confirmed' })}
            />
            <NumberBox
              number="0,003%"
              label={formatMessage({ id: 'numbers.population' })}
            />
          </Row>
          <h2>
            <FormattedMessage id="site.titles.deaths" />
          </h2>
          <Row>
            <NumberBox
              number="0"
              label={formatMessage({ id: 'numbers.deaths' })}
            />
            <NumberBox
              number="0%"
              label={formatMessage({ id: 'numbers.population' })}
            />
          </Row>
          <h2>
            <FormattedMessage id="site.titles.healed" />
          </h2>
          <Row>
            <NumberBox
              number="2"
              label={formatMessage({ id: 'numbers.healed' })}
            />
            <NumberBox
              number="0,003%"
              label={formatMessage({ id: 'numbers.population' })}
            />
          </Row>
        </Rows>
        <Charts />
      </Main>
      <Footer />
    </>
  );
};

export default Root;
