import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Teachers from './pages/Teachers';

const {Navigator, Screen} = createStackNavigator();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home} options={{}} />
        <Screen name="Teachers" component={Teachers} options={{}} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
