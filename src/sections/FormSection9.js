import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {formSection9Styles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton, InputField} from '../core/components';
import {strings} from '../core/strings';
import {
  SET_REGISTRATION_NO,
  SET_VECHICLE_TYPE,
} from '../register/redux/actionTypes';
import {connect} from 'react-redux';

const FormSection9 = ({
  registrationNo,
  recomplete,
  setVechicleType,
  setRegistrationNo,
}) => {
  const [option1Selected, setOption1Selected] = useState(false);
  const [option2Selected, setOption2Selected] = useState(false);

  return (
    <ScrollView style={formSection9Styles.container}>
      <View style={formSection9Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{strings.form9Label}</Text>
      </View>
      <View style={formSection9Styles.buttonsContainer}>
        <SelectionButton
          text={strings.auto}
          isSelected={option1Selected}
          onPress={() => {
            setOption1Selected(true);
            setOption2Selected(false);
            setVechicleType('auto');
          }}
        />
        <SelectionButton
          text={strings.ambulance}
          isSelected={option2Selected}
          onPress={() => {
            setOption1Selected(false);
            setOption2Selected(true);
            setVechicleType('ambulance');
          }}
        />
      </View>
      <View style={formSection9Styles.vehicleTextContainer}>
        <Text style={labelStyles.textStyle}>{strings.form9Label2}</Text>
      </View>
      <InputField
        placeholder={strings.placeholderAutomobil}
        customContainerStyle={formSection9Styles.vehicleInputContainer}
        value={registrationNo}
        onChangeText={setRegistrationNo}
      />
      {recomplete && (
        <View style={formSection9Styles.recompleteTextContainer}>
          <Text style={formSection9Styles.grayText}>
            {strings.aceleasiDateAnterioare}
          </Text>
          <TouchableOpacity>
            <Text style={formSection9Styles.blueText}>
              {strings.folosesteDateAnterioare}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const mapStateToProps = state => {
  const {registrationNo, recomplete} = state.register.rergisterReducer;
  return {registrationNo, recomplete};
};

const mapDispatchToProps = dispatch => ({
  setRegistrationNo: registrationNo =>
    dispatch({type: SET_REGISTRATION_NO, registrationNo}),
  setVechicleType: vechicleType =>
    dispatch({type: SET_VECHICLE_TYPE, vechicleType}),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSection9);
