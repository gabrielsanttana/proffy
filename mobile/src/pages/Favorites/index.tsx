import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Proffys disponíveis" />
      <Text>Favorites</Text>
    </View>
  );
};

export default Favorites;
