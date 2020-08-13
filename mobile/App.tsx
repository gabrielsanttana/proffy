import React from 'react';
import {StatusBar} from 'expo-status-bar';
import Router from './src/routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
};

export default App;
