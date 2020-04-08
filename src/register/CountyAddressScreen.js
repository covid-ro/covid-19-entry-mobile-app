import React from 'react';
import {View, Text} from 'react-native';
import {CountiesList} from './components';

const CountyAddressScreen = ({route}) => {
  const {data, onPress} = route.params;
  return (
    <View>
      <CountiesList data={data[0].localitati} onPress={onPress} />
    </View>
  );
};
export default CountyAddressScreen;
