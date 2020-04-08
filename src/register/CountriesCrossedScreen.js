import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {countriesCrossedScreenStyles} from './styles';
import {strings} from '../core/strings';
import {CountriesCrossedList, SearchBar} from './components';
import {countriesCrossed} from '../core/constants';
import {countriesSearch} from '../core/utils';
import {I18n} from '../core/strings';

const CountriesCrossedScreen = ({route}) => {
  const setCountries = route.params.setCountries;
  const [searchValue, setSearchValue] = useState(undefined);
  const [countriesSearched, setCountriesSearched] = useState();

  useEffect(() => {
    searchValue && setCountriesSearched(countriesSearch(searchValue));
  }, [searchValue]);

  return (
    <View style={countriesCrossedScreenStyles.container}>
      <Text style={countriesCrossedScreenStyles.description}>
        {strings.countriesCrossedDescription}
      </Text>
      <SearchBar
        value={searchValue}
        setSearchValue={setSearchValue}
        onCancelPress={() => setSearchValue('')}
        placeholder={I18n.t('cautare')}
      />
      <CountriesCrossedList
        countries={searchValue ? countriesSearched : countriesCrossed}
        getCountries={setCountries}
      />
    </View>
  );
};

export default CountriesCrossedScreen;
