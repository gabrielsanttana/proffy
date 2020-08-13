import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/icons/study.png';
import teachIcon from '../../assets/icons/give-classes.png';
import heartIcon from '../../assets/icons/heart.png';
import styles from './styles';

const Home: React.FC = () => {
  const totalConnections = 100;

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
};

export default Home;
