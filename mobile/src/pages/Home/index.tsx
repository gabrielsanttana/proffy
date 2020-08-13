import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {AppLoading} from 'expo';
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/icons/study.png';
import teachIcon from '../../assets/icons/give-classes.png';
import heartIcon from '../../assets/icons/heart.png';
import styles from './styles';

const Home: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const totalConnections = 100;

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Image source={landingImage} />
        <Text style={styles.welcomeMessage}>
          Boas-vindas, {'\n'}
          <Text style={styles.welcomeMessageBold}>O que deseja fazer?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.studyButton]}>
            <Image source={studyIcon} />
            <Text style={styles.buttonText}>Estudar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.teachButton]}>
            <Image source={teachIcon} />
            <Text style={styles.buttonText}>Ensinar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.totalConnections}>
          Total de {totalConnections} realizadas {''}
          <Image source={heartIcon} />
        </Text>
      </View>
    );
  } else {
    return <AppLoading />;
  }
};

export default Home;
