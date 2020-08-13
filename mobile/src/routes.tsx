import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';

const AppStack = createStackNavigator();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} options={{}} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
