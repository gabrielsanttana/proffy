import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TeachBackground from '../../assets/images/give-classes-background.png';
import styles from './styles';

const Teach: React.FC = () => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={TeachBackground}
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>

        <TouchableOpacity style={styles.alrightButton} onPress={() => goBack()}>
          <Text style={styles.alrightButtonText}>Tudo bem</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Teach;
