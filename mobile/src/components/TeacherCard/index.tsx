import React, {useState} from 'react';
import {View, Text, Image, Linking, AsyncStorage} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import favoriteIcon from '../../assets/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/icons/unfavorite.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import styles from './styles';

export interface Teacher {
  id: number;
  avatar: string;
  name: string;
  subject: string;
  bio: string;
  price: number;
  whatsapp: string;
}

interface TeacherCardProps {
  isFavorite: boolean;
  teacher: Teacher;
}

const TeacherCard: React.FC<TeacherCardProps> = ({teacher, isFavorite}) => {
  const [isTeacherFavorite, setIsTeacherFavorite] = useState(isFavorite);

  const redirectToWhatsapp = () => {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  };

  const toggleFavorite = async () => {
    const favoriteTeachers = await AsyncStorage.getItem('favoriteTeachers');

    let favoriteTeachersArray = [];

    if (favoriteTeachers) {
      favoriteTeachersArray = JSON.parse(favoriteTeachers);
    }

    if (isTeacherFavorite) {
      const favoriteTeacherIndex = favoriteTeachersArray.findIndex(
        (teacherItem: Teacher) => {
          return teacherItem.id === teacher.id;
        },
      );

      favoriteTeachersArray.splice(favoriteTeacherIndex, 1);

      setIsTeacherFavorite(false);
    } else {
      favoriteTeachersArray.push(teacher);

      setIsTeacherFavorite(true);
    }

    await AsyncStorage.setItem(
      'favoriteTeachers',
      JSON.stringify(favoriteTeachersArray),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={{uri: teacher.avatar}} style={styles.avatar} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}{' '}
          <Text style={styles.value}>{`R${teacher.price},00`}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            style={[
              styles.favoriteButton,
              isTeacherFavorite && styles.favorite,
            ]}
            onPress={toggleFavorite}
          >
            <Image source={isTeacherFavorite ? unfavoriteIcon : favoriteIcon} />
          </RectButton>

          <RectButton
            style={styles.whatsappButton}
            onPress={redirectToWhatsapp}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherCard;
