import React from 'react';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import searchBarStyles from './styles/searchBarStyles';
import {images, colors} from '../../themes';
import {I18n} from '../../core/strings';

const SearchBar = ({value, setSearchValue, onCancelPress}) => {
  return (
    <View style={searchBarStyles.container}>
      <View style={searchBarStyles.searchContainer}>
        <Image source={images.icon_search} style={searchBarStyles.searchIcon} />
        <TextInput
          style={searchBarStyles.text}
          placeholderTextColor={colors.grey75}
          placeholder={I18n.t('cautare')}
          onChangeText={setSearchValue}
          value={value}
        />
      </View>
      {value ? (
        <TouchableOpacity onPress={onCancelPress}>
          <Text style={searchBarStyles.cancelText}>{I18n.t('anulati')}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SearchBar;
