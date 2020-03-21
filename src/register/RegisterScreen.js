import React from 'react';
import {View} from 'react-native';
import {registerScreenStyles} from './styles';
import {ProgressHeader} from './components';

const RegisterScreen = () => {
  return (
    <View style={registerScreenStyles.container}>
      <ProgressHeader step={4} />
    </View>
  );
};

export default RegisterScreen;
