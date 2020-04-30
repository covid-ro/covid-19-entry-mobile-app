import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {LanguageSelectionScreen} from '../languageSelection';
import RegisterStack from './RegisterStack';
import FinishNavigator from './FinishNavigator';
import {
  PhoneNumberScreen,
  ValidateSMSScreen,
  InformationScreen,
} from '../register';
import CodesScreen from '../finish/CodesScreen';
import {roots} from '.';
import {I18n} from '../core/strings';
import {BackButton} from '../core/components';

const Stack = createStackNavigator();

const defaultNavigationOptions = () => ({
  gestureEnabled: false,
  headerLeft: () => <BackButton />,
});

const MainStackNavigator = ({navigation, language}) => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{gestureEnabled: false}}
      initialRouteName={roots.languageSelect}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      screenOptions={defaultNavigationOptions}>
      <Stack.Screen
        options={{headerShown: false}}
        name={roots.languageSelect}
        component={LanguageSelectionScreen}
      />

      <Stack.Screen
        options={{title: ''}}
        name={roots.informationScreen}
        component={InformationScreen}
        screenOptions={defaultNavigationOptions}
      />

      <Stack.Screen
        options={{title: I18n.t('phoneNumberTitle', {locale: language})}}
        name={roots.sendNumber}
        component={PhoneNumberScreen}
      />
      <Stack.Screen
        options={{title: I18n.t('validationSMSCode', {locale: language})}}
        name={roots.sendCode}
        component={ValidateSMSScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={roots.registerStack}
        component={RegisterStack}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={roots.finishNavigator}
        component={FinishNavigator}
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
  </NavigationContainer>
);

const mapStateToProps = state => {
  const {language} = state.register.rergisterReducer;
  return {language};
};

export default connect(mapStateToProps)(MainStackNavigator);
