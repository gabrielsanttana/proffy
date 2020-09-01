import React, {ReactNode} from 'react';
import {View, Text, Image} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import arrowBackIcon from '../../assets/icons/back.png';
import proffyLogo from '../../assets/images/logo.png';
import styles from './styles';

interface HeaderProps {
  title?: string;
  rightComponent?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({title, rightComponent, children}) => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <BorderlessButton onPress={() => navigate('Home')}>
          <Image source={arrowBackIcon} resizeMode="contain" />
        </BorderlessButton>

        <BorderlessButton onPress={() => navigate('Home')}>
          <Image source={proffyLogo} resizeMode="contain" />
        </BorderlessButton>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        {rightComponent}
      </View>

      {children}
    </View>
  );
};

export default Header;
