import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { IntlProvider } from 'react-intl';
import Root from './components/Root';
import en from './translations/en.json';
import client from './graphql/apolloSetup';

const translations = {
  en,
};

const App = () => {
  return (
    <IntlProvider locale="en" messages={translations['en']}>
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    </IntlProvider>
  );
};

export default App;
