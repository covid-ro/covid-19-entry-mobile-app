import React from 'react';
import {View, Text} from 'react-native';
import {countriesCrossedScreenStyles} from './styles';
import {strings} from '../core/strings';
import {CountriesCrossedList} from './components';
import {countriesCrossed} from '../core/constants';

const CountriesCrossedScreen = ({route}) => {
  return (
    <View style={countriesCrossedScreenStyles.container}>
      <Text style={countriesCrossedScreenStyles.description}>
        {strings.countriesCrossedDescription}
      </Text>
      <CountriesCrossedList
        countries={countriesCrossed}
        getCountries={selected => route.params.setCountries(selected)}
      />
    </View>
  );
};

export default CountriesCrossedScreen;
