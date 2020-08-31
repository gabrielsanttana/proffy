import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../components/Header';
import TeacherCard from '../../components/TeacherCard';
import styles from './styles';

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Meu proffys favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherCard favorite />
        <TeacherCard favorite />
        <TeacherCard favorite />
        <TeacherCard favorite />
        <TeacherCard favorite />
      </ScrollView>
    </View>
  );
};

export default Favorites;
