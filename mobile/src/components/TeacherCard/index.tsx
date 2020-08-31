import React from 'react';
import {View, Text, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import favoriteIcon from '../../assets/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/icons/unfavorite.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import styles from './styles';

interface TeacherCardProps {
  favorite: boolean;
}

const TeacherCard: React.FC<TeacherCardProps> = ({favorite}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{uri: 'https://github.com/diego3g.png'}}
          style={styles.avatar}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Gabriel Santana</Text>
          <Text style={styles.subject}>Geografia</Text>
        </View>
      </View>

      <Text style={styles.bio}>Biografia</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '} <Text style={styles.value}>R$20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            style={[styles.favoriteButton, favorite && styles.favorite]}
          >
            <Image source={favorite ? unfavoriteIcon : favoriteIcon} />
          </RectButton>

          <RectButton style={styles.whatsappButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherCard;
