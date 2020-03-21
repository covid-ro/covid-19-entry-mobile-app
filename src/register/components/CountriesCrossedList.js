import {FlatList, View} from 'react-native';
import {countriesCrossedListStyles} from './styles';
import React from 'react';
import {CountryItem} from './index';

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

  return (
    <View style={countriesCrossedListStyles.container}>
      <View style={countriesCrossedListStyles.separator} />
      <FlatList
        data={countries.countries}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CountryItem
            item={item}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        extraData={selected}
      />
    </View>
  );
};

export default CountriesCrossedList;
