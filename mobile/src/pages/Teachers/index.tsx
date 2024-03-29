import React, {useState, useEffect} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {Feather} from '@expo/vector-icons';
import api from '../../services/api';
import Header from '../../components/Header';
import TeacherCard, {Teacher} from '../../components/TeacherCard';
import styles from './styles';

const Teachers: React.FC = () => {
  const [formData, setFormData] = useState({
    subject: '',
    week_day: '1',
    hour: '9:00',
  });
  const [availableTeachers, setAvailableTeachers] = useState([]);
  const [favoriteTeachers, setFavoriteTeachers] = useState<number[]>([]);
  const [areFiltersVisible, setAreFiltersVisible] = useState<boolean>(true);
  const [searchResultMessage, setSearchResultMessage] = useState<string>('');

  const loadFavoriteTeachers = async () => {
    AsyncStorage.getItem('favoriteTeachers').then((response) => {
      if (response) {
        const favoriteTeacherIds = JSON.parse(response).map(
          (favoriteTeacher: Teacher) => {
            return favoriteTeacher.id;
          },
        );

        setFavoriteTeachers(favoriteTeacherIds);
      }
    });
  };

  useFocusEffect(() => {
    loadFavoriteTeachers();
  });

  const searchClasses = async () => {
    loadFavoriteTeachers();

    const response = await api.get('/classes', {params: formData});

    if (response.data.length <= 0) {
      setSearchResultMessage(
        'Não há professores disponíveis com essas especificações no momento :/',
      );
      setAreFiltersVisible(true);
      return setAvailableTeachers([]);
    }

    setSearchResultMessage('');
    setAreFiltersVisible(false);
    setAvailableTeachers(response.data);
  };

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

            <RectButton style={styles.searchButton} onPress={searchClasses}>
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
        {availableTeachers?.map((availableTeacher: Teacher) => {
          return (
            <TeacherCard
              teacher={availableTeacher}
              isFavorite={favoriteTeachers.includes(availableTeacher.id)}
              key={availableTeacher.id}
            />
          );
        })}

        {searchResultMessage ? (
          <Text style={styles.searchResultMessage}>{searchResultMessage}</Text>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Teachers;
