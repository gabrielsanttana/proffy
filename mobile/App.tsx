import React from 'react';
import {AppLoading} from 'expo';
import {StatusBar} from 'expo-status-bar';
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import Router from './src/routes/AppStack';

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (fontsLoaded) {
    return (
      <>
        <StatusBar style="light" />
        <Router />
      </>
    );
  } else {
    return <AppLoading />;
  }
};

export default App;
