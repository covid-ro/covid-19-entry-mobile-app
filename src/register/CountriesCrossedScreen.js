import React, {useRef, useCallback} from 'react';
import {View, Text} from 'react-native';
import {countriesCrossedScreenStyles} from './styles';
import {strings} from '../core/strings';
import {CountriesCrossedList} from './components';
import {countriesCrossed} from '../core/constants';

const CountriesCrossedScreen = () => {
  const countries = [
    {id: 0, data: 'Country 1'},
    {id: 1, data: 'Country 2'},
    {id: 2, data: 'Country 3'},
    {id: 3, data: 'Country 4'},
  ];
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
