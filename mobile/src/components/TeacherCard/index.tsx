import React from 'react';
import {View, Text, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import favoriteIcon from '../../assets/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/icons/unfavorite.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import styles from './styles';

const TeacherCard: React.FC = () => {
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
          <RectButton style={[styles.button, styles.favorite]}>
            <Image source={favoriteIcon} style={styles.buttonIcon} />
          </RectButton>

          <RectButton style={[styles.button, styles.whatsapp]}>
            <Image source={whatsappIcon} style={styles.buttonIcon} />
            Entrar em contato
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherCard;
