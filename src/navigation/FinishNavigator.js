import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FinishScreen, EndScreen} from '../finish';
import {roots} from './index';
import {strings} from '../core/strings';
import CodesScreen from '../finish/CodesScreen';

const Stack = createStackNavigator();

const FinishNavigator = () => (
  <Stack.Navigator screenOptions={{gestureEnabled: false}}>
    <Stack.Screen
      options={{title: strings.declaratie}}
      name={roots.finishScreen}
      component={FinishScreen}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name={roots.endScreen}
      component={EndScreen}
    />
    <Stack.Screen
      options={{title: strings.declaratie, headerLeft: null}}
      name={roots.codesScreen}
      component={CodesScreen}
    />
  </Stack.Navigator>
);

export default FinishNavigator;
