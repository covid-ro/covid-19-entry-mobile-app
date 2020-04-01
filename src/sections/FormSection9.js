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

const FormSection9 = ({registrationNo, setVechicleType, setRegistrationNo}) => {
  const [option1Selected, setOption1Selected] = useState(false);
  const [option2Selected, setOption2Selected] = useState(false);
  const [recompleteForm, setRecompleteForm] = useState(false);

  return (
    <View style={formSection9Styles.container}>
      <View style={formSection9Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{I18n.t('form9Label')}</Text>
      </View>
      <View style={formSection9Styles.buttonsContainer}>
        <SelectionButton
          text={I18n.t('auto')}
          isSelected={option1Selected}
          onPress={() => {
            setOption1Selected(true);
            setOption2Selected(false);
            setVechicleType('auto');
          }}
        />
        <SelectionButton
          text={I18n.t('ambulance')}
          isSelected={option2Selected}
          onPress={() => {
            setOption1Selected(false);
            setOption2Selected(true);
            setVechicleType('ambulance');
          }}
        />
      </View>
      <View style={formSection9Styles.vehicleTextContainer}>
        <Text style={labelStyles.textStyle}>{I18n.t('form9Label2')}</Text>
      </View>
      <InputField
        placeholder={I18n.t('placeholderAutomobil')}
        customContainerStyle={formSection9Styles.vehicleInputContainer}
        value={registrationNo}
        onChangeText={setRegistrationNo}
      />
      {recompleteForm && (
        <View style={formSection9Styles.recompleteTextContainer}>
          <Text style={formSection9Styles.grayText}>
            {I18n.t('aceleasiDateAnterioare')}
          </Text>
          <TouchableOpacity>
            <Text style={formSection9Styles.blueText}>
              {I18n.t('folosesteDateAnterioare')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => {
  const {registrationNo} = state.register.rergisterReducer;
  return {registrationNo};
};

const mapDispatchToProps = dispatch => ({
  setRegistrationNo: registrationNo =>
    dispatch({type: SET_REGISTRATION_NO, registrationNo}),
  setVechicleType: vechicleType =>
    dispatch({type: SET_VECHICLE_TYPE, vechicleType}),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSection9);
