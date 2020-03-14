import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { IntlProvider } from 'react-intl';
import Root from './components/Root';
import en from './translations/en.json';
import fi from './translations/fi.json';
import client from './graphql/apolloSetup';

const translations = {
  en,
  fi,
};

const App = () => {
  const [locale, setLocale] = useState<'en' | 'fi'>('en');
  return (
    <IntlProvider locale={locale} messages={translations[locale]}>
      <ApolloProvider client={client}>
        <Root changeLocale={setLocale} />
      </ApolloProvider>
    </IntlProvider>
  );
};

export default App;
