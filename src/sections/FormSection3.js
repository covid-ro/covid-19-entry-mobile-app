import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, Platform, Image} from 'react-native';
import {DatePicker, Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {InputField} from '../core/components';
import {images} from '../themes';
import {ANDROID} from '../core/constants';
import {
  getVisitedCountries,
  getVisitedCountriesCodes,
  getCountriesBasedOnCodes,
} from '../core/utils';
import {countries} from '../core/constants';
import {formSection3Styles} from './styles';
import {I18n} from '../core/strings';
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
  recompleteData,
  recomplete,
  setTravellingCountry,
  setTravellingCity,
  setTravellingDate,
  setItineraryCountries,
  language,
}) => {
  const [visitedCountries, setVisitedCountries] = useState(null);
  const [countriesCrossed, setCountriesCrossed] = useState(null);
  let datePickerRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (visitedCountries) {
      const countriesCodes = getVisitedCountriesCodes(visitedCountries);
      setItineraryCountries(countriesCodes);
    }
  }, [visitedCountries, setItineraryCountries]);

  const onPressReuseData = () => {
    const {
      travellingFromCity,
      travellingFromCountry,
      travellingFromDate,
      itineraryCountries,
    } = recompleteData;
    setTravellingCountry(travellingFromCountry);
    setTravellingDate(travellingFromDate);
    setTravellingCity(travellingFromCity);
    setItineraryCountries(itineraryCountries);
    datePickerRef.setDate(travellingFromDate);
    setCountriesCrossed(getCountriesBasedOnCodes(itineraryCountries));
  };
  return (
    <View style={formSection3Styles.container}>
      <Text style={formSection3Styles.title}>
        {I18n.t('form3Label', {locale: language})}
      </Text>
      <TouchableOpacity
        style={formSection3Styles.countryContainer}
        disabled={travellingFromCountry !== null ? false : true}
        onPress={() =>
          navigation.navigate(roots.countriesScreen, {
            data: countries,
            onPress: setTravellingCountry,
          })
        }>
        <Text
          style={[
            formSection3Styles.countryText,
            travellingFromCountry && formSection3Styles.countryActiveText,
          ]}>
          {travellingFromCountry?.name || I18n.t('country', {locale: language})}
        </Text>
        {Platform.OS === ANDROID ? (
          <Image
            source={images.arrow_down}
            style={formSection3Styles.imageIcon}
          />
        ) : (
          <Icon name="arrow-down" style={formSection3Styles.customPickerIcon} />
        )}
      </TouchableOpacity>
      <View
        style={
          travellingFromCountry
            ? formSection3Styles.valueSeparator
            : formSection3Styles.separator
        }
      />
      <InputField
        placeholder={I18n.t('county', {locale: language})}
        value={travellingFromCity}
        onChangeText={setTravellingCity}
        placeholderSeparatorStyle={formSection3Styles.placeholderSeparatorStyle}
        focusedSeparatorStyle={formSection3Styles.focusedSeparatorStyle}
        autoCorrect={false}
        customContainerStyle={formSection3Styles.inputContainer}
      />
      <View style={formSection3Styles.dateContainer}>
        <DatePicker
          ref={ref => (datePickerRef = ref)}
          androidMode={'default'}
          placeHolderText={I18n.t('data', {locale: language})}
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
          {I18n.t('transitedCountries', {locale: language})}
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
            (visitedCountries || countriesCrossed) &&
              formSection3Styles.selectedCountriesText,
          ]}>
          {visitedCountries
            ? getVisitedCountries(visitedCountries)
            : countriesCrossed
            ? countriesCrossed
            : I18n.t('selectCountries', {locale: language})}
        </Text>
      </TouchableOpacity>
      <View
        style={
          visitedCountries || countriesCrossed
            ? formSection3Styles.valueSeparator
            : formSection3Styles.separator
        }
      />
      {recomplete && (
        <View style={formSection3Styles.recompleteTextContainer}>
          <Text style={formSection3Styles.grayText}>
            {I18n.t('aceleasiDateAnterioare', {locale: language})}
          </Text>
          <TouchableOpacity onPress={() => onPressReuseData()}>
            <Text style={formSection3Styles.blueText}>
              {I18n.t('folosesteDateAnterioare', {locale: language})}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={formSection3Styles.bottomMargin} />
    </View>
  );
};

const mapStateToProps = state => {
  const {
    travellingFromCountry,
    travellingFromCity,
    travellingFromDate,
    itineraryCountries,
    recomplete,
    recompleteData,
    language,
  } = state.register.rergisterReducer;
  return {
    travellingFromCountry,
    travellingFromCity,
    travellingFromDate,
    itineraryCountries,
    recomplete,
    recompleteData,
    language,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormSection3);
