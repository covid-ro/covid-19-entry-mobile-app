import React, {useState, useRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {InputField} from '../core/components';
import {formSection4Styles} from './styles';
import {I18n} from '../core/strings';
import {DatePicker} from 'native-base';
import {labelStyles} from '../core/styles';
import {connect} from 'react-redux';
import {
  SET_CITY,
  SET_COUNTY,
  SET_ARRIVAL,
  SET_DEPARTURE,
  SET_ADDRESS,
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
}) => {
  const localitateRef = useRef(null);
  let arrivalPickerRef = useRef(null);
  let departurePickerRef = useRef(null);

  const onPressReuseData = () => {
    const {city, county, address, departureDate, arrivalDate} = recompleteData;
    setCity(city);
    setCounty(county);
    setAddress(address);
    setDeparture(departureDate);
    setArrrival(arrivalDate);
    departurePickerRef.setDate(departureDate);
    arrivalPickerRef.setDate(arrivalDate);
  };
  return (
    <View style={formSection4Styles.container}>
      <Text style={[labelStyles.textStyle, formSection4Styles.topTextStyle]}>
        {I18n.t('form4Label')}
      </Text>
      <InputField
        placeholder={I18n.t('judet')}
        value={county}
        onChangeText={setCounty}
        placeholderSeparatorStyle={formSection4Styles.inputPlaceholderSeparator}
        returnKeyType={'next'}
        onSubmitEditing={() => {
          localitateRef.current.focus();
        }}
        blurOnSubmit={false}
      />
      <InputField
        inputRef={localitateRef}
        placeholder={I18n.t('localitate')}
        value={city}
        onChangeText={setCity}
        customContainerStyle={formSection4Styles.inputStyle}
        placeholderSeparatorStyle={formSection4Styles.inputPlaceholderSeparator}
      />
      <View style={formSection4Styles.datepickerContainer}>
        <DatePicker
          placeHolderText={I18n.t('dataPlecarii')}
          ref={ref => (departurePickerRef = ref)}
          placeHolderTextStyle={formSection4Styles.datePickerPlaceholderStyle}
          onDateChange={setDeparture}
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
          placeHolderText={I18n.t('dataSosirii')}
          ref={ref => (arrivalPickerRef = ref)}
          placeHolderTextStyle={formSection4Styles.datePickerPlaceholderStyle}
          onDateChange={setArrrival}
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
        placeholder={I18n.t('adresaCompleta')}
        value={address}
        onChangeText={setAddress}
        placeholderSeparatorStyle={formSection4Styles.inputPlaceholderSeparator}
      />
      {recomplete && (
        <View style={formSection4Styles.recompleteTextContainer}>
          <Text style={formSection4Styles.grayText}>
            {I18n.t('aceleasiDateAnterioare')}
          </Text>
          <TouchableOpacity onPress={() => onPressReuseData()}>
            <Text style={formSection4Styles.blueText}>
              {I18n.t('folosesteDateAnterioare')}
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
  } = state.register.rergisterReducer;
  return {
    city,
    county,
    address,
    departureDate,
    arrivalDate,
    recomplete,
    recompleteData,
  };
};

const mapDispatchToProps = dispatch => ({
  setCity: city => dispatch({type: SET_CITY, city}),
  setCounty: county => dispatch({type: SET_COUNTY, county}),
  setArrrival: arrivalDate => dispatch({type: SET_ARRIVAL, arrivalDate}),
  setDeparture: departureDate => dispatch({type: SET_DEPARTURE, departureDate}),
  setAddress: address => dispatch({type: SET_ADDRESS, address}),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSection4);
