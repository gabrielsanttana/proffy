import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const Teachers: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Proffys disponíveis" />
      <Text>Teachers</Text>
    </View>
  );
};

export default Teachers;
