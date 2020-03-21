import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RegisterScreen} from '../register';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{gestureEnabled: false}} initialRouteName={"Declaratie"}>
      <Stack.Screen name={'Declaratie'} component={RegisterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
