import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import styled from 'styled-components';

import NumberBox from './NumberBox';

interface NumbersObject {
  all: number;
  today: number;
}

interface NumbersProps {
  confirmed: NumbersObject;
  deaths: NumbersObject;
  recovered: NumbersObject;
}

const Rows = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  @media only screen and (min-width: 770px) {
    width: 30rem;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Numbers: FunctionComponent<NumbersProps> = ({
  confirmed,
  deaths,
  recovered,
}) => {
  const { formatMessage } = useIntl();
  return (
    <Rows>
      <h2>
        <FormattedMessage id="site.titles.confirmed" />
      </h2>
      <Row>
        <NumberBox
          number={confirmed.all}
          label={formatMessage({ id: 'numbers.confirmed' })}
        />
        <NumberBox
          number={confirmed.today}
          label={formatMessage({ id: 'numbers.today' })}
        />
      </Row>
      <h2>
        <FormattedMessage id="site.titles.deaths" />
      </h2>
      <Row>
        <NumberBox
          number={deaths.all}
          label={formatMessage({ id: 'numbers.deaths' })}
        />
        <NumberBox
          number={deaths.today}
          label={formatMessage({ id: 'numbers.today' })}
        />
      </Row>
      <h2>
        <FormattedMessage id="site.titles.recovered" />
      </h2>
      <Row>
        <NumberBox
          number={recovered.all}
          label={formatMessage({ id: 'numbers.recovered' })}
        />
        <NumberBox
          number={recovered.today}
          label={formatMessage({ id: 'numbers.today' })}
        />
      </Row>
    </Rows>
  );
};

export default Numbers;
