import React, {useState, useRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {InputField} from '../core/components';
import {formSection4Styles} from './styles';
import {strings} from '../core/strings';
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
        {strings.form4Label}
      </Text>
      <InputField
        placeholder={strings.judet}
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
        placeholder={strings.localitate}
        value={city}
        onChangeText={setCity}
        customContainerStyle={formSection4Styles.inputStyle}
        placeholderSeparatorStyle={formSection4Styles.inputPlaceholderSeparator}
      />
      <View style={formSection4Styles.datepickerContainer}>
        <DatePicker
          ref={ref => (departurePickerRef = ref)}
          placeHolderText={strings.dataPlecarii}
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
          ref={ref => (arrivalPickerRef = ref)}
          placeHolderText={strings.dataSosirii}
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
        placeholder={strings.adresaCompleta}
        value={address}
        onChangeText={setAddress}
        placeholderSeparatorStyle={formSection4Styles.inputPlaceholderSeparator}
      />
      {recomplete && (
        <View style={formSection4Styles.recompleteTextContainer}>
          <Text style={formSection4Styles.grayText}>
            {strings.aceleasiDateAnterioare}
          </Text>
          <TouchableOpacity onPress={() => onPressReuseData()}>
            <Text style={formSection4Styles.blueText}>
              {strings.folosesteDateAnterioare}
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
