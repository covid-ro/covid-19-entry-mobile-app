import React, {useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {formSection1Styles} from './styles';
import {labelStyles} from '../core/styles';
import {InputField} from '../core/components';
import {I18n} from '../core/strings';
import {connect} from 'react-redux';
import {
  SET_FIRST_NAME,
  SET_SURNAME,
  SET_CNP,
} from '../register/redux/actionTypes';

const FormSection1 = ({
  firstName,
  surname,
  cnp,
  setFirstName,
  setSurname,
  setCNP,
  language,
}) => {
  const prenumeRef = useRef(null);
  const CNPRef = useRef(null);

  return (
    <View style={formSection1Styles.container}>
      <View style={formSection1Styles.textContainer}>
        <Text style={labelStyles.textStyle}>
          {I18n.t('form1Label', {locale: language})}
        </Text>
      </View>
      <InputField
        placeholder={I18n.t('nume', {locale: language})}
        value={firstName}
        onChangeText={setFirstName}
        returnKeyType={'next'}
        onSubmitEditing={() => {
          prenumeRef.current.focus();
        }}
        blurOnSubmit={false}
        placeholderSeparatorStyle={formSection1Styles.inputPlaceholderSeparator}
      />
      <InputField
        inputRef={prenumeRef}
        placeholder={I18n.t('prenume', {locale: language})}
        value={surname}
        onChangeText={setSurname}
        returnKeyType={'next'}
        onSubmitEditing={() => {
          CNPRef.current.focus();
        }}
        blurOnSubmit={false}
        placeholderSeparatorStyle={formSection1Styles.inputPlaceholderSeparator}
      />
      <InputField
        inputRef={CNPRef}
        placeholder={I18n.t('cnp', {locale: language})}
        value={cnp}
        keyboardType="number-pad"
        onChangeText={setCNP}
        placeholderSeparatorStyle={formSection1Styles.inputPlaceholderSeparator}
        customContainerStyle={formSection1Styles.inputFieldStyle}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const {firstName, surname, cnp, language} = state.register.rergisterReducer;
  return {firstName, surname, cnp, language};
};

const mapDispatchToProps = dispatch => ({
  setFirstName: firstName => dispatch({type: SET_FIRST_NAME, firstName}),
  setSurname: surname => dispatch({type: SET_SURNAME, surname}),
  setCNP: cnp => dispatch({type: SET_CNP, cnp}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormSection1);
