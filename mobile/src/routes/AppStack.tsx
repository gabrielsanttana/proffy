import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import StudyTabs from './StudyTabs';
import Teach from '../pages/Teach';

const {Navigator, Screen} = createStackNavigator();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="Teachers" component={StudyTabs} />
        <Screen name="Teach" component={Teach} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
