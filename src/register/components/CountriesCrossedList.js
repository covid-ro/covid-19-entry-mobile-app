import {SectionList, View, Text} from 'react-native';
import {countriesCrossedListStyles} from './styles';
import React from 'react';
import {CountryItem} from './index';

const CountriesCrossedList = ({countries, getCountries}) => {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
      getCountries(newSelected);
    },
    [selected, getCountries],
  );
  return (
    <View style={countriesCrossedListStyles.container}>
      <View style={countriesCrossedListStyles.separator} />
      <SectionList
        sections={countries}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => {
          return (
            <CountryItem
              item={item}
              selected={!!selected.get(item.iso)}
              onSelect={onSelect}
            />
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <View style={countriesCrossedListStyles.headerContainer}>
            <Text style={countriesCrossedListStyles.headerText}>{title}</Text>
          </View>
        )}
        extraData={selected}
      />
    </View>
  );
};

export default CountriesCrossedList;
