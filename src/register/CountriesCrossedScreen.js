import React, {useRef, useCallback} from 'react';
import {View, Text} from 'react-native';
import {countriesCrossedScreenStyles} from './styles';
import {strings} from '../core/strings';
import {CountriesCrossedList} from './components';
import {countriesCrossed} from '../core/constants';

const CountriesCrossedScreen = () => {
  return (
    <View style={countriesCrossedScreenStyles.container}>
      <Text style={countriesCrossedScreenStyles.description}>
        {strings.countriesCrossedDescription}
      </Text>
      <CountriesCrossedList countries={countriesCrossed} />
    </View>
  );
};

export default CountriesCrossedScreen;
