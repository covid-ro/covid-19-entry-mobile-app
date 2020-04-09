import React from 'react';
import {View, Platform} from 'react-native';
import {Picker, Icon} from 'native-base';
import {customPickerStyles} from './styles';
import {ANDROID} from '../constants';
import {I18n} from '../strings';
import {BackHeader} from '../components';

const CustomPicker = ({
  onValueChange,
  selectedValue,
  data,
  placeholder,
  enabled,
}) => {
  return (
    <View>
      <View style={customPickerStyles.pickerContainer}>
        <Picker
          style={
            Platform.OS === ANDROID
              ? customPickerStyles.androidPicker
              : customPickerStyles.picker
          }
          onValueChange={onValueChange}
          selectedValue={selectedValue}
          textStyle={customPickerStyles.pickerText}
          placeholder={placeholder}
          placeholderStyle={customPickerStyles.pickerPlaceHolder}
          enabled={enabled}
          headerBackButtonText={I18n.t('back')}
          renderHeader={backAction => (
            <BackHeader onPress={backAction} title={'Alege unul'} />
          )}
          iosIcon={
            <Icon name="arrow-down" style={customPickerStyles.pickerIcon} />
          }>
          {data.map(item => {
            return (
              <Picker.Item
                label={item.name || item.nume}
                value={item.code ? item.code : item.name}
                key={item.code ? item.code : item.name}
              />
            );
          })}
        </Picker>
      </View>
      {Platform.OS === ANDROID ? (
        <View
          style={
            selectedValue
              ? customPickerStyles.valueAndroidSeparator
              : customPickerStyles.androidPickerSeparator
          }
        />
      ) : (
        <View
          style={
            selectedValue
              ? customPickerStyles.valueSeparator
              : customPickerStyles.separator
          }
        />
      )}
    </View>
  );
};

export default CustomPicker;
