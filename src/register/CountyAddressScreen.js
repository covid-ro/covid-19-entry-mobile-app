import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {CountiesList, SearchBar} from './components';
import {countiesSearch} from '../core/utils';
import {I18n} from '../core/strings';
import {countyAddressScreenStyles} from './styles';

const CountyAddressScreen = ({route, language}) => {
  const {data, onPress} = route.params;
  const [counties, setCounties] = useState(data[0].localitati);
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    searchValue && setCounties(countiesSearch(data[0].localitati, searchValue));
  }, [searchValue, data]);

  return (
    <View style={countyAddressScreenStyles.container}>
      <View style={countyAddressScreenStyles.searchBarContainer}>
        <SearchBar
          value={searchValue}
          setSearchValue={setSearchValue}
          onCancelPress={() => setSearchValue('')}
          placeholder={I18n.t('searchForCounty', {locale: language})}
        />
      </View>
      <CountiesList
        data={searchValue ? counties : data[0].localitati}
        onPress={onPress}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const {language} = state.register.rergisterReducer;
  return {language};
};

export default connect(mapStateToProps)(CountyAddressScreen);
