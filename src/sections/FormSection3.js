import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Platform, ScrollView} from 'react-native';
import {Picker, DatePicker, Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {InputField} from '../core/components';
import {
  countries,
  getVisitedCountries,
  getVisitedCountriesCodes,
} from '../core/utils';
import {formSection3Styles} from './styles';
import {strings} from '../core/strings';
import {ANDROID} from '../core/constants';
import {roots} from '../navigation';
import {connect} from 'react-redux';
import {
  SET_TRAVELLING_COUNTRY,
  SET_TRAVELLING_CITY,
  SET_TRAVELLING_DATE,
  SET_ITINERARY_COUNTRIES,
} from '../register/redux/actionTypes';

const FormSection3 = ({
  travellingFromCountry,
  travellingFromDate,
  travellingFromCity,
  itineraryCountries,
  setTravellingCountry,
  setTravellingCity,
  setTravellingDate,
  setItineraryCountries,
  recomplete,
}) => {
  const [visitedCountries, setVisitedCountries] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (visitedCountries) {
      const countriesCodes = getVisitedCountriesCodes(visitedCountries);
      setItineraryCountries(countriesCodes);
    }
  }, [visitedCountries]);
  return (
    <ScrollView style={formSection3Styles.container}>
      <Text style={formSection3Styles.title}>{strings.form3Label}</Text>
      <View style={[formSection3Styles.pickerContainer]}>
        <Picker
          style={
            Platform.OS === ANDROID
              ? formSection3Styles.androidPicker
              : formSection3Styles.picker
          }
          onValueChange={setTravellingCountry}
          selectedValue={travellingFromCountry}
          textStyle={formSection3Styles.pickerText}
          placeholder={strings.country}
          placeholderStyle={formSection3Styles.pickerPlaceHolder}
          iosIcon={
            <Icon name="arrow-down" style={formSection3Styles.pickerIcon} />
          }>
          {countries.map(item => (
            <Picker.Item label={item.name} value={item.code} key={item.code} />
          ))}
        </Picker>
      </View>
      {Platform.OS === ANDROID ? (
        <View
          style={
            travellingFromCountry
              ? formSection3Styles.valueAndroidSeparator
              : formSection3Styles.androidPickerSeparator
          }
        />
      ) : (
        <View
          style={
            travellingFromCountry
              ? formSection3Styles.valueSeparator
              : formSection3Styles.separator
          }
        />
      )}
      <InputField
        placeholder={strings.county}
        value={travellingFromCity}
        onChangeText={setTravellingCity}
        placeholderSeparatorStyle={formSection3Styles.placeholderSeparatorStyle}
        focusedSeparatorStyle={formSection3Styles.focusedSeparatorStyle}
        autoCorrect={false}
        customContainerStyle={formSection3Styles.inputContainer}
      />
      <View style={formSection3Styles.dateContainer}>
        <DatePicker
          androidMode={'default'}
          placeHolderText={strings.data}
          placeHolderTextStyle={formSection3Styles.datePickerPlaceholderStyle}
          onDateChange={setTravellingDate}
          textStyle={formSection3Styles.datePickerTextStyle}
        />
        <View
          style={
            travellingFromDate
              ? formSection3Styles.valueDatePickerSeparator
              : formSection3Styles.datePickerSeparator
          }
        />
      </View>
      <View style={formSection3Styles.countriesTitleContainer}>
        <Text style={formSection3Styles.countriesTitleText}>
          {strings.transitedCountries}
        </Text>
      </View>
      <TouchableOpacity
        style={formSection3Styles.countriesTextContainer}
        onPress={() => {
          navigation.navigate(roots.countriesCrossed, {
            setCountries: setVisitedCountries,
          });
        }}>
        <Text
          style={[
            formSection3Styles.countriesText,
            visitedCountries && formSection3Styles.selectedCountriesText,
          ]}>
          {visitedCountries
            ? getVisitedCountries(visitedCountries)
            : strings.selectCountries}
        </Text>
      </TouchableOpacity>
      <View
        style={
          visitedCountries
            ? formSection3Styles.valueSeparator
            : formSection3Styles.separator
        }
      />
      {recomplete && (
        <View style={formSection3Styles.recompleteTextContainer}>
          <Text style={formSection3Styles.grayText}>
            {strings.aceleasiDateAnterioare}
          </Text>
          <TouchableOpacity>
            <Text style={formSection3Styles.blueText}>
              {strings.folosesteDateAnterioare}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={formSection3Styles.bottomMargin} />
    </ScrollView>
  );
};

const mapStateToProps = state => {
  const {
    travellingFromCountry,
    travellingFromCity,
    travellingFromDate,
    itineraryCountries,
    recomplete,
  } = state.register.rergisterReducer;
  return {
    travellingFromCountry,
    travellingFromCity,
    travellingFromDate,
    itineraryCountries,
    recomplete,
  };
};

const mapDispatchToProps = dispatch => ({
  setTravellingCountry: travellingCountry =>
    dispatch({type: SET_TRAVELLING_COUNTRY, travellingCountry}),
  setTravellingCity: travellingFromCity =>
    dispatch({type: SET_TRAVELLING_CITY, travellingFromCity}),
  setTravellingDate: travellingDate =>
    dispatch({type: SET_TRAVELLING_DATE, travellingDate}),
  setItineraryCountries: itineraryCountries =>
    dispatch({type: SET_ITINERARY_COUNTRIES, itineraryCountries}),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSection3);
