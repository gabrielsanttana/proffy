import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Teachers from './pages/Teachers';

const AppStack = createStackNavigator();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} options={{}} />
        <AppStack.Screen name="Teachers" component={Teachers} options={{}} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
