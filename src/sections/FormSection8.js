import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {formSection8Styles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton} from '../core/components';
import {I18n} from '../core/strings';
import {
  SET_FEVER,
  SET_BREATHING,
  SET_COUGH,
  SET_SWALLOW,
} from '../register/redux/actionTypes';
import {connect} from 'react-redux';

const FormSection8 = ({
  fever,
  breathing,
  swallow,
  cough,
  setFever,
  setBreathing,
  setSwallow,
  setCough,
}) => {
  return (
    <View style={formSection8Styles.container}>
      <View style={formSection8Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{I18n.t('form8Label')}</Text>
      </View>
      <View style={formSection8Styles.buttonsContainer}>
        <SelectionButton
          text={I18n.t('simptom1')}
          isSelected={fever}
          onPress={() => {
            setFever(!fever);
          }}
        />
        <SelectionButton
          text={I18n.t('simptom2')}
          isSelected={swallow}
          onPress={() => {
            setSwallow(!swallow);
          }}
        />
      </View>
      <View style={formSection8Styles.buttonsContainer}>
        <SelectionButton
          text={I18n.t('simptom3')}
          isSelected={breathing}
          onPress={() => {
            setBreathing(!breathing);
          }}
        />
        <SelectionButton
          text={I18n.t('simptom3')}
          isSelected={cough}
          onPress={() => {
            setCough(!cough);
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  const {fever, swallow, cough, breathing} = state.register.rergisterReducer;
  return {fever, swallow, cough, breathing};
};

const mapDispatchToProps = dispatch => ({
  setFever: fever => dispatch({type: SET_FEVER, fever}),
  setBreathing: breathing => dispatch({type: SET_BREATHING, breathing}),
  setCough: cough => dispatch({type: SET_COUGH, cough}),
  setSwallow: swallow => dispatch({type: SET_SWALLOW, swallow}),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSection8);
