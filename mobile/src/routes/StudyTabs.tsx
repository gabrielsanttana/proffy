import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Teachers from '../pages/Teachers';
import Favorites from '../pages/Favorites';

const StudyTabs: React.FC = () => {
  const {Navigator, Screen} = createBottomTabNavigator();

  return (
    <Navigator>
      <Screen name="Teachers" component={Teachers} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  );
};

export default StudyTabs;
