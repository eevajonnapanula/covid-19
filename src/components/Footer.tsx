import React from 'react';
import { FormattedMessage } from 'react-intl';

const Footer = () => (
  <footer>
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
      <br />

      <FormattedMessage
        id="footer.made-by"
        values={{
          GithubLink: (
            <a href="https://github.com/eevajonnapanula">@eevajonnapanula</a>
          ),
        }}
      />
    </p>
  </footer>
);

export default Footer;
