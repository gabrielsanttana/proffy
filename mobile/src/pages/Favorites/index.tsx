import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../../components/Header';
import TeacherCard, {Teacher} from '../../components/TeacherCard';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';

const Favorites: React.FC = () => {
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);

  useEffect(() => {
    AsyncStorage.clear();
  }, []);

  function loadFavoriteTeachers() {
    AsyncStorage.getItem('favoriteTeachers').then((response) => {
      if (response) {
        const favoriteTeachers = JSON.parse(response);

        setFavoriteTeachers(favoriteTeachers);
      }
    });
  }

  useFocusEffect(() => loadFavoriteTeachers());

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
        {favoriteTeachers.length >= 1 ? (
          favoriteTeachers.map((favoriteTeacher: Teacher, index) => {
            return (
              <TeacherCard teacher={favoriteTeacher} isFavorite key={index} />
            );
          })
        ) : (
          <Text style={styles.noFavoritesMessage}>
            Não há professores favoritos no momento.
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Favorites;
