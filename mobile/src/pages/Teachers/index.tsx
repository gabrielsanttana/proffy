import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../../components/Header';
import TeacherCard from '../../components/TeacherCard';
import styles from './styles';

const Teachers: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Proffys disponíveis" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </ScrollView>
    </View>
  );
};

export default Teachers;
