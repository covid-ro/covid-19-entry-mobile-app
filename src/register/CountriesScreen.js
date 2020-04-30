import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {CountiesList, SearchBar} from './components';
import {getCountrySearch} from '../core/utils';
import {I18n} from '../core/strings';
import {countriesScreenStyles} from './styles';

const CountriesScreen = ({route, language}) => {
  const {data, onPress} = route.params;
  const [countries, setCountries] = useState(data);
  const [searchValue, setSearchValue] = useState();
  const [selectedCountry, setSelectedCountry] = useState();

  useEffect(() => {
    selectedCountry && onPress(selectedCountry);
  }, [selectedCountry, onPress]);
  useEffect(() => {
    searchValue && setCountries(getCountrySearch(data, searchValue));
  }, [searchValue, data]);

  return (
    <View style={countriesScreenStyles.container}>
      <View style={countriesScreenStyles.searchBarContainer}>
        <SearchBar
          value={searchValue}
          setSearchValue={setSearchValue}
          onCancelPress={() => setSearchValue('')}
          placeholder={I18n.t('searchForCountry', {locale: language})}
        />
      </View>
      <CountiesList
        data={searchValue ? countries : data}
        onPress={setSelectedCountry}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const {language} = state.register.rergisterReducer;
  return {language};
};
export default connect(mapStateToProps)(CountriesScreen);
