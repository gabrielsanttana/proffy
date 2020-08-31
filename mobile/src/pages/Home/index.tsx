import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/icons/study.png';
import teachIcon from '../../assets/icons/give-classes.png';
import heartIcon from '../../assets/icons/heart.png';
import styles from './styles';

const Home: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState<number>(0);

  useEffect(() => {
    api.get('/connections').then((response) => {
      setTotalConnections(response.data.total);
    });
  }, []);

  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={landingImage} />
      <Text style={styles.welcomeMessage}>
        Boas-vindas, {'\n'}
        <Text style={styles.welcomeMessageBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.studyButton]}
          onPress={() => navigator.navigate('Teachers')}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.teachButton]}
          onPress={() => navigator.navigate('Teach')}
        >
          <Image source={teachIcon} />
          <Text style={styles.buttonText}>Ensinar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões realizadas {''}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
};

export default Home;
