import React from 'react';
import { FormattedMessage } from 'react-intl';

const Footer = () => (
  <footer>
    <p>
      <FormattedMessage id="footer.data-source" />
      <br />

      <FormattedMessage id="footer.made-by" />
    </p>
  </footer>
);

export default Footer;
