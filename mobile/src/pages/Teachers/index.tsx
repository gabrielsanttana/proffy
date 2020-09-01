import React from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import Header from '../../components/Header';
import TeacherCard from '../../components/TeacherCard';
import styles from './styles';

const Teachers: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Proffys disponíveis">
        <View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput
            style={styles.input}
            placeholder="Qual a matéria?"
            placeholderTextColor="#c1bccc"
          />

          <View style={styles.inputGroup}>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual o dia?"
                placeholderTextColor="#c1bccc"
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Horário</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual horário?"
                placeholderTextColor="#c1bccc"
              />
            </View>
          </View>
        </View>
      </Header>

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

export default Teachers;
