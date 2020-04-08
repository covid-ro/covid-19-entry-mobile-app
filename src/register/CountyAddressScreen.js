import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {CountiesList, SearchBar} from './components';
import {countiesSearch} from '../core/utils';
import {I18n} from '../core/strings';

const CountyAddressScreen = ({route}) => {
  const {data, onPress} = route.params;
  const [counties, setCounties] = useState(data[0].localitati);
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    searchValue && setCounties(countiesSearch(data[0].localitati, searchValue));
  }, [searchValue, data]);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{paddingVertical: 30}}>
        <SearchBar
          value={searchValue}
          setSearchValue={setSearchValue}
          onCancelPress={() => setSearchValue('')}
          placeholder={I18n.t('searchForCounty')}
        />
      </View>
      <CountiesList
        data={searchValue ? counties : data[0].localitati}
        onPress={onPress}
      />
    </View>
  );
};
export default CountyAddressScreen;
