import {Text, View, TouchableOpacity, Image} from 'react-native';
import {countriesCrossedListStyles} from './styles';
import React from 'react';
import {images} from '../../themes';

const CountryItem = ({item, selected, onSelect}) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(item.id)}
      style={countriesCrossedListStyles.item}>
      <View style={countriesCrossedListStyles.content}>
        <Text>{item.data}</Text>
        {selected ? <Image source={images.ic_check} /> : null}
      </View>
      <View style={countriesCrossedListStyles.separator} />
    </TouchableOpacity>
  );
};

export default CountryItem;
