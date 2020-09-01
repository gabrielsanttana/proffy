import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import Header from '../../components/Header';
import TeacherCard from '../../components/TeacherCard';
import styles from './styles';

const Teachers: React.FC = () => {
  const [formData, setFormData] = useState({
    subject: '',
    week_day: '',
    hour: '',
  });
  const [areFiltersVisible, setAreFiltersVisible] = useState<boolean>(false);

  const filtersButton = (
    <BorderlessButton onPress={() => setAreFiltersVisible(!areFiltersVisible)}>
      <Feather name="filter" size={20} color="#fff" />
    </BorderlessButton>
  );

  return (
    <View style={styles.container}>
      <Header title="Proffys disponíveis" rightComponent={filtersButton}>
        {areFiltersVisible ? (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
              onChangeText={(text) => setFormData({...formData, subject: text})}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBox}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                  onChangeText={(text) =>
                    setFormData({...formData, week_day: text})
                  }
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                  onChangeText={(text) =>
                    setFormData({...formData, hour: text})
                  }
                />
              </View>
            </View>

            <RectButton style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Buscar</Text>
            </RectButton>
          </View>
        ) : null}
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
