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

type LocaleType = 'en' | 'fi';

const App = () => {
  const localeFromLocalStorage = localStorage.getItem('locale');
  const localeToSet =
    localeFromLocalStorage === 'en' || localeFromLocalStorage === 'fi'
      ? localeFromLocalStorage
      : 'fi';
  const [locale, setLocale] = useState<LocaleType>(localeToSet);
  const hanldeLocaleChange = () => {
    localStorage.setItem('locale', locale === 'en' ? 'fi' : 'en');
    setLocale(locale === 'en' ? 'fi' : 'en');
  };

  return (
    <IntlProvider locale={locale} messages={translations[locale]}>
      <ApolloProvider client={client}>
        <Root changeLocale={hanldeLocaleChange} />
      </ApolloProvider>
    </IntlProvider>
  );
};

export default App;
