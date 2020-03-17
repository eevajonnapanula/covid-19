import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-size: 0.85rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 768px) {
    width: 50rem;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>
      <FormattedMessage
        id="footer.data-source"
        values={{
          HSLink: (
            <a href="https://github.com/HS-Datadesk/koronavirus-avoindata">
              Helsingin Sanomat
            </a>
          ),
        }}
      />
    </p>
    <p>
      <FormattedMessage
        id="footer.made-by"
        values={{
          GithubLink: (
            <a href="https://github.com/eevajonnapanula/covid-19">Github</a>
          ),
        }}
      />
    </p>
  </StyledFooter>
);

export default Footer;
