import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
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
  const redirectToWhatsapp = () => {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
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
            style={[styles.favoriteButton, isFavorite && styles.favorite]}
          >
            <Image source={isFavorite ? unfavoriteIcon : favoriteIcon} />
          </RectButton>

          <RectButton
            style={styles.whatsappButton}
            onPress={() => redirectToWhatsapp()}
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
