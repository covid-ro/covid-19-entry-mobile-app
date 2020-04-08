import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {countiesListStyles} from './styles';
import {useNavigation} from '@react-navigation/native';

const CountiesList = ({data, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={countiesListStyles.container}>
      <FlatList
        style={countiesListStyles.flatList}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={item => {
          return (
            <TouchableOpacity
              style={countiesListStyles.item}
              onPress={() => {
                onPress(item.item);
                navigation.goBack();
              }}>
              <View style={countiesListStyles.content}>
                <Text style={countiesListStyles.textItem}>
                  {item.item.nume}
                </Text>
              </View>
              <View style={countiesListStyles.separator} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CountiesList;
