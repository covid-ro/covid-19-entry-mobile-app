import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {FinishScreen, EndScreen} from '../finish';
import {roots} from './index';
import {I18n} from '../core/strings';
import CodesScreen from '../finish/CodesScreen';

const Stack = createStackNavigator();

const FinishNavigator = ({language}) => (
  <Stack.Navigator screenOptions={{gestureEnabled: false}}>
    <Stack.Screen
      options={{title: I18n.t('declaratie', {locale: language})}}
      name={roots.finishScreen}
      component={FinishScreen}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name={roots.endScreen}
      component={EndScreen}
    />
    <Stack.Screen
      options={{
        title: I18n.t('declaratie', {locale: language}),
        headerLeft: null,
      }}
      name={roots.codesScreen}
      component={CodesScreen}
    />
  </Stack.Navigator>
);

const mapStateToProps = state => {
  const {language} = state.register.rergisterReducer;
  return {language};
};

export default connect(mapStateToProps)(FinishNavigator);
