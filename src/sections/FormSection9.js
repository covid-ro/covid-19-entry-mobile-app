import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {formSection9Styles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton, InputField} from '../core/components';
import {I18n} from '../core/strings';
import {
  SET_REGISTRATION_NO,
  SET_VECHICLE_TYPE,
} from '../register/redux/actionTypes';
import {connect} from 'react-redux';

const FormSection9 = ({
  registrationNo,
  recomplete,
  recompleteData,
  setVechicleType,
  setRegistrationNo,
  language,
}) => {
  const [option1Selected, setOption1Selected] = useState(false);
  const [option2Selected, setOption2Selected] = useState(false);

  const onPressReuseData = () => {
    const {registrationNo, vechicleType} = recompleteData;
    setRegistrationNo(registrationNo);
    setVechicleType(vechicleType);
    vechicleType === 'auto'
      ? setOption1Selected(true)
      : setOption2Selected(true);
  };

  return (
    <View style={formSection9Styles.container}>
      <View style={formSection9Styles.textContainer}>
        <Text style={labelStyles.textStyle}>
          {I18n.t('form9Label', {locale: language})}
        </Text>
      </View>
      <View style={formSection9Styles.buttonsContainer}>
        <SelectionButton
          text={I18n.t('auto', {locale: language})}
          isSelected={option1Selected}
          onPress={() => {
            setOption1Selected(true);
            setOption2Selected(false);
            setVechicleType('auto');
          }}
        />
        <SelectionButton
          text={I18n.t('ambulance', {locale: language})}
          isSelected={option2Selected}
          onPress={() => {
            setOption1Selected(false);
            setOption2Selected(true);
            setVechicleType('ambulance');
          }}
        />
      </View>
      <View style={formSection9Styles.vehicleTextContainer}>
        <Text style={labelStyles.textStyle}>
          {I18n.t('form9Label2', {locale: language})}
        </Text>
      </View>
      {option1Selected && (
        <InputField
          placeholder={I18n.t('placeholderAutomobil', {locale: language})}
          customContainerStyle={formSection9Styles.vehicleInputContainer}
          value={registrationNo}
          onChangeText={setRegistrationNo}
        />
      )}
      {recomplete && (
        <View style={formSection9Styles.recompleteTextContainer}>
          <Text style={formSection9Styles.grayText}>
            {I18n.t('aceleasiDateAnterioare', {locale: language})}
          </Text>
          <TouchableOpacity onPress={() => onPressReuseData()}>
            <Text style={formSection9Styles.blueText}>
              {I18n.t('folosesteDateAnterioare', {locale: language})}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => {
  const {
    registrationNo,
    recomplete,
    recompleteData,
    language,
  } = state.register.rergisterReducer;
  return {registrationNo, recomplete, recompleteData, language};
};

const mapDispatchToProps = dispatch => ({
  setRegistrationNo: registrationNo =>
    dispatch({type: SET_REGISTRATION_NO, registrationNo}),
  setVechicleType: vechicleType =>
    dispatch({type: SET_VECHICLE_TYPE, vechicleType}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormSection9);
