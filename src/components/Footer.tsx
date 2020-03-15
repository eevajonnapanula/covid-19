import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-size: 0.85rem;
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
      <span> | </span>
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
