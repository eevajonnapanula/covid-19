import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface NumberBoxProps {
  number: string | number;
  label: string;
}

const Wrapper = styled.div`
  min-width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #222139;
  padding: 0.5rem;
`;

const Number = styled.div`
  font-size: 3rem;
`;

const NumberBox: FunctionComponent<NumberBoxProps> = ({ number, label }) => (
  <Wrapper>
    <Number>{number}</Number>
    <p>{label}</p>
  </Wrapper>
);

export default NumberBox;
