import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {countriesCrossedListStyles} from './styles';
import {strings} from '../../core/strings';
import React from 'react';
import {colors} from '../../themes';

const CountriesCrossedList = countries => {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onSelect(item.id)}
        style={countriesCrossedListStyles.item}>
        <Text>{item.data}</Text>
        <View style={countriesCrossedListStyles.separator} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={countriesCrossedListStyles.container}>
      <View style={countriesCrossedListStyles.separator} />
      <FlatList
        data={countries.countries}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CountriesCrossedList;
