import React from 'react';
import {View, Text, Image} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import arrowBackIcon from '../../assets/icons/back.png';
import proffyLogo from '../../assets/images/logo.png';
import styles from './styles';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <BorderlessButton onPress={() => {}}>
          <Image source={arrowBackIcon} resizeMode="contain" />
        </BorderlessButton>

        <BorderlessButton onPress={() => {}}>
          <Image source={proffyLogo} resizeMode="contain" />
        </BorderlessButton>
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
