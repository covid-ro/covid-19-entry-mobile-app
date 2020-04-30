import 'react-native-gesture-handler';
import * as React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CountriesCrossedScreen,
  RegisterScreen,
  CountyAddressScreen,
  CountriesScreen,
  SignatureScreen,
} from '../register';
import {roots} from './index';
import {BackButton} from '../core/components';
import {I18n} from '../core/strings';

const Stack = createStackNavigator();

const RegisterStack = ({language}) => (
  <Stack.Navigator
    screenOptions={{gestureEnabled: false}}
    initialRouteName={roots.registerScreen}>
    <Stack.Screen
      name={roots.registerScreen}
      component={RegisterScreen}
      options={{title: I18n.t('declaratie', {locale: language})}}
    />
    <Stack.Screen
      name={roots.countriesCrossed}
      options={{
        title: I18n.t('countriesCrossed', {locale: language}),
        headerLeft: () => <BackButton />,
      }}
      component={CountriesCrossedScreen}
    />
    <Stack.Screen
      name={roots.countyScreen}
      options={{
        title: I18n.t('selectCounty', {locale: language}),
        headerLeft: () => <BackButton />,
      }}
      component={CountyAddressScreen}
    />
    <Stack.Screen
      name={roots.countriesScreen}
      options={{
        title: I18n.t('selectCountry', {locale: language}),
        headerLeft: () => <BackButton />,
      }}
      component={CountriesScreen}
    />
    <Stack.Screen
      name={roots.signatureScreen}
      options={{headerShown: false}}
      component={SignatureScreen}
    />
  </Stack.Navigator>
);

const mapStateToProps = state => {
  const {language} = state.register.rergisterReducer;
  return {language};
};

export default connect(mapStateToProps)(RegisterStack);
