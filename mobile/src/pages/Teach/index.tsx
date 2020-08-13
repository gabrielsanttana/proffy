import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import TeachBackground from '../../assets/images/give-classes-background.png';
import styles from './styles';

const Teach: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={TeachBackground}
        style={styles.content}
        resizeMode="contain"
      ></ImageBackground>
    </View>
  );
};

export default Teach;
