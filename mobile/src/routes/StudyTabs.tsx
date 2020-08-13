import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import Teachers from '../pages/Teachers';
import Favorites from '../pages/Favorites';

const StudyTabs: React.FC = () => {
  const {Navigator, Screen} = createBottomTabNavigator();

  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen
        name="Teachers"
        component={Teachers}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Ionicons
                name="ios-easel"
                color={focused ? '#8257e5' : color}
                size={size}
              />
            );
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Ionicons
                name="ios-heart"
                color={focused ? '#8257e5' : color}
                size={size}
              />
            );
          },
        }}
      />
    </Navigator>
  );
};

export default StudyTabs;
