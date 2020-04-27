import React from 'react';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import searchBarStyles from './styles/searchBarStyles';
import {images, colors} from '../../themes';
import {I18n} from '../../core/strings';

const SearchBar = ({
  value,
  setSearchValue,
  onCancelPress,
  placeholder,
  language,
}) => {
  return (
    <View style={searchBarStyles.container}>
      <View style={searchBarStyles.searchContainer}>
        <Image source={images.icon_search} style={searchBarStyles.searchIcon} />
        <TextInput
          style={searchBarStyles.text}
          placeholderTextColor={colors.grey75}
          placeholder={placeholder}
          onChangeText={setSearchValue}
          value={value}
        />
      </View>
      {value ? (
        <TouchableOpacity onPress={onCancelPress}>
          <Text style={searchBarStyles.cancelText}>
            {I18n.t('cancel', {locale: language})}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const mapStateToProps = state => {
  const {language} = state.register.rergisterReducer;
  return {language};
};

export default connect(mapStateToProps)(SearchBar);
