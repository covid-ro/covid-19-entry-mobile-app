import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {Picker, DatePicker, Icon} from 'native-base';
import {InputField} from '../core/components';
import {countries, getVisitedCountries} from '../core/utils';
import {formSection3Styles} from './styles';
import {strings} from '../core/strings';
import {roots} from '../navigation';

const FormSection3 = ({navigation}) => {
  const [country, setCountryValue] = useState(undefined);
  const [county, setCountyValue] = useState(null);
  const [date, setDateValue] = useState(null);
  const [visitedCountries, setVisitedCountries] = useState(null);

  return (
    <View style={formSection3Styles.container}>
      <Text style={formSection3Styles.title}>{strings.form3Label}</Text>
      <View style={[formSection3Styles.pickerContainer]}>
        <Picker
          style={
            Platform.OS === 'android'
              ? formSection3Styles.androidPicker
              : formSection3Styles.picker
          }
          onValueChange={setCountryValue}
          selectedValue={country}
          textStyle={formSection3Styles.pickerText}
          placeholder={strings.country}
          placeholderStyle={formSection3Styles.pickerPlaceHolder}
          iosIcon={
            <Icon name="arrow-down" style={formSection3Styles.pickerIcon} />
          }>
          {countries.map(item => (
            <Picker.Item label={item.name} value={item.name} key={item.code} />
          ))}
        </Picker>
      </View>
      {Platform.OS === 'android' ? (
        <View style={formSection3Styles.androidPickerSeparator} />
      ) : (
        <View style={formSection3Styles.separator} />
      )}
      <View style={formSection3Styles.inputContainer}>
        <InputField
          placeholder={strings.county}
          value={county}
          onChangeText={setCountyValue}
          placeholderSeparatorStyle={
            formSection3Styles.placeholderSeparatorStyle
          }
          focusedSeparatorStyle={formSection3Styles.focusedSeparatorStyle}
          autoCorrect={false}
        />
      </View>
      <View style={formSection3Styles.datePickerContainer}>
        <DatePicker
          androidMode={'default'}
          placeHolderText={strings.data}
          placeHolderTextStyle={formSection3Styles.datePickerPlaceholderStyle}
          onDateChange={setDateValue}
          textStyle={formSection3Styles.datePickerTextStyle}
        />
      </View>
      <View style={formSection3Styles.datePickerSeparator} />
      <View style={formSection3Styles.countriesTitleContainer}>
        <Text style={formSection3Styles.countriesTitleText}>
          {strings.transitedCountries}
        </Text>
      </View>
      <TouchableOpacity
        style={formSection3Styles.countriesTextContainer}
        onPress={() =>
          navigation.navigate(roots.countriesCrossed, {
            setCountries: setVisitedCountries,
          })
        }>
        <Text style={formSection3Styles.countriesText}>
          {visitedCountries
            ? getVisitedCountries(visitedCountries)
            : strings.selectCountries}
        </Text>
      </TouchableOpacity>
      <View style={formSection3Styles.separator} />
    </View>
  );
};
export default FormSection3;
