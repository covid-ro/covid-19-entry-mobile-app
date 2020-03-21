import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RegisterScreen} from '../register';

const Stack = createStackNavigator();

const RegisterStack = () => (
  <Stack.Navigator screenOptions={{gestureEnabled: false}}>
    <Stack.Screen name={'Declaratie'} component={RegisterScreen} />
  </Stack.Navigator>
);

export default RegisterStack;
