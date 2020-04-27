import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {InputField, CustomPicker} from '../core/components';
import {formSection4Styles} from './styles';
import {I18n} from '../core/strings';
import {DatePicker, Icon} from 'native-base';
import {labelStyles} from '../core/styles';
import {connect} from 'react-redux';
import {counties, localities} from '../core/constants';
import {roots} from '../navigation';
import {ANDROID} from '../core/constants';
import {images} from '../themes';
import {
  SET_CITY,
  SET_COUNTY,
  SET_ARRIVAL,
  SET_DEPARTURE,
  SET_ADDRESS,
  SET_ARRIVAL_DATE_REUSE,
  SET_DEPARTURE_DATE_REUSE,
} from '../register/redux/actionTypes';

const FormSection4 = ({
  city,
  county,
  address,
  departureDate,
  arrivalDate,
  recomplete,
  recompleteData,
  setCity,
  setCounty,
  setAddress,
  setArrrival,
  setDeparture,
  language,
  setArrivalDateReuse,
  setDepartureDateReuse,
}) => {
  let arrivalPickerRef = useRef(null);
  let departurePickerRef = useRef(null);
  const navigation = useNavigation();

  const onPressReuseData = () => {
    console.log('salut');
    setDepartureDateReuse(true);
    setArrivalDateReuse(true);
    const {city, county, address, departureDate, arrivalDate} = recompleteData;
    setCity(city);
    setCounty(county);
    setAddress(address);
    setDeparture(departureDate);
    setArrrival(arrivalDate);
    departurePickerRef.setDate(departureDate);
    arrivalPickerRef.setDate(arrivalDate);
  };
  const [cityArray, setCityArray] = useState();
  const [locality, setLocality] = useState();

  useEffect(() => {
    setCityArray(localities.filter(item => item.auto === county));
  }, [county]);

  useEffect(() => {
    locality && setCity(locality.nume);
  }, [locality, setCity]);

  return (
    <View style={formSection4Styles.container}>
      <Text style={[labelStyles.textStyle, formSection4Styles.topTextStyle]}>
        {I18n.t('form4Label', {locale: language})}
      </Text>
      <CustomPicker
        data={counties}
        onValueChange={setCounty}
        selectedValue={county}
        placeholder={I18n.t('judet', {locale: language})}
      />
      <TouchableOpacity
        style={formSection4Styles.countyContainer}
        disabled={county ? false : true}
        onPress={() =>
          navigation.navigate(roots.countyScreen, {
            data: cityArray,
            onPress: setLocality,
          })
        }>
        <Text
          style={[
            formSection4Styles.localityText,
            city !== '' && formSection4Styles.localityActiveText,
          ]}>
          {city || I18n.t('localitate', {locale: language})}
        </Text>
        {Platform.OS === ANDROID ? (
          <Image
            source={images.arrow_down}
            style={formSection4Styles.imageIcon}
          />
        ) : (
          <Icon name="arrow-down" style={formSection4Styles.pickerIcon} />
        )}
      </TouchableOpacity>
      <View
        style={
          city
            ? formSection4Styles.valueSeparator
            : formSection4Styles.separator
        }
      />
      <View style={formSection4Styles.datepickerContainer}>
        <DatePicker
          placeHolderText={I18n.t('dataPlecarii', {locale: language})}
          ref={ref => (departurePickerRef = ref)}
          placeHolderTextStyle={formSection4Styles.datePickerPlaceholderStyle}
          onDateChange={date => {
            setDeparture(date);
            setDepartureDateReuse(false);
          }}
          textStyle={formSection4Styles.datePickerTextStyle}
        />
        <View
          style={
            departureDate
              ? formSection4Styles.valueSeparator
              : formSection4Styles.separator
          }
        />
      </View>
      <View style={formSection4Styles.datepickerContainer}>
        <DatePicker
          placeHolderText={I18n.t('dataSosirii', {locale: language})}
          ref={ref => (arrivalPickerRef = ref)}
          placeHolderTextStyle={formSection4Styles.datePickerPlaceholderStyle}
          onDateChange={date => {
            setArrrival(date);
            setArrivalDateReuse(false);
          }}
          textStyle={formSection4Styles.datePickerTextStyle}
        />
        <View
          style={
            arrivalDate
              ? formSection4Styles.valueSeparator
              : formSection4Styles.separator
          }
        />
      </View>
      <InputField
        placeholder={I18n.t('adresaCompleta', {locale: language})}
        value={address}
        onChangeText={setAddress}
        placeholderSeparatorStyle={formSection4Styles.inputPlaceholderSeparator}
      />
      {recomplete && (
        <View style={formSection4Styles.recompleteTextContainer}>
          <Text style={formSection4Styles.grayText}>
            {I18n.t('aceleasiDateAnterioare', {locale: language})}
          </Text>
          <TouchableOpacity onPress={() => onPressReuseData()}>
            <Text style={formSection4Styles.blueText}>
              {I18n.t('folosesteDateAnterioare', {locale: language})}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={formSection4Styles.bottomMargin} />
    </View>
  );
};

const mapStateToProps = state => {
  const {
    city,
    county,
    address,
    departureDate,
    arrivalDate,
    recomplete,
    recompleteData,
    language,
  } = state.register.rergisterReducer;
  return {
    city,
    county,
    address,
    departureDate,
    arrivalDate,
    recomplete,
    recompleteData,
    language,
  };
};

const mapDispatchToProps = dispatch => ({
  setCity: city => dispatch({type: SET_CITY, city}),
  setCounty: county => dispatch({type: SET_COUNTY, county}),
  setArrrival: arrivalDate => dispatch({type: SET_ARRIVAL, arrivalDate}),
  setDeparture: departureDate => dispatch({type: SET_DEPARTURE, departureDate}),
  setAddress: address => dispatch({type: SET_ADDRESS, address}),
  setArrivalDateReuse: arrivalDateReuse =>
    dispatch({type: SET_ARRIVAL_DATE_REUSE, arrivalDateReuse}),
  setDepartureDateReuse: departureDateReuse =>
    dispatch({type: SET_DEPARTURE_DATE_REUSE, departureDateReuse}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormSection4);
