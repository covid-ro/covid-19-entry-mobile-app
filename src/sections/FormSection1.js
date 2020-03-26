import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {formSection1Styles} from './styles';
import {labelStyles} from '../core/styles';
import {InputField} from '../core/components';
import {strings} from '../core/strings';
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
}) => {
  return (
    <ScrollView style={formSection1Styles.container}>
      <View style={formSection1Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{strings.form1Label}</Text>
      </View>
      <InputField
        placeholder={strings.nume}
        value={firstName}
        onChangeText={setFirstName}
        placeholderSeparatorStyle={formSection1Styles.inputPlaceholderSeparator}
      />
      <InputField
        placeholder={strings.prenume}
        value={surname}
        onChangeText={setSurname}
        placeholderSeparatorStyle={formSection1Styles.inputPlaceholderSeparator}
      />
      <InputField
        placeholder={strings.cnp}
        value={cnp}
        onChangeText={setCNP}
        placeholderSeparatorStyle={formSection1Styles.inputPlaceholderSeparator}
        customContainerStyle={formSection1Styles.inputFieldStyle}
      />
    </ScrollView>
  );
};

const mapStateToProps = state => {
  const {name, lastName, cnp} = state.register.rergisterReducer;
  return {name, lastName, cnp};
};

const mapDispatchToProps = dispatch => ({
  setFirstName: firstName => dispatch({type: SET_FIRST_NAME, firstName}),
  setSurname: surname => dispatch({type: SET_SURNAME, surname}),
  setCNP: cnp => dispatch({type: SET_CNP, cnp}),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSection1);
