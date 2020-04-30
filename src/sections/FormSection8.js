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
  language,
}) => {
  return (
    <View style={formSection8Styles.container}>
      <View style={formSection8Styles.textContainer}>
        <Text style={labelStyles.textStyle}>
          {I18n.t('form8Label', {locale: language})}
        </Text>
      </View>
      <View style={formSection8Styles.buttonsContainer}>
        <SelectionButton
          text={I18n.t('simptom1', {locale: language})}
          isSelected={fever}
          onPress={() => {
            setFever(!fever);
          }}
        />
        <SelectionButton
          text={I18n.t('simptom2', {locale: language})}
          isSelected={swallow}
          onPress={() => {
            setSwallow(!swallow);
          }}
        />
      </View>
      <View style={formSection8Styles.buttonsContainer}>
        <SelectionButton
          text={I18n.t('simptom3', {locale: language})}
          isSelected={breathing}
          onPress={() => {
            setBreathing(!breathing);
          }}
        />
        <SelectionButton
          text={I18n.t('simptom4', {locale: language})}
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
  const {
    fever,
    swallow,
    cough,
    breathing,
    language,
  } = state.register.rergisterReducer;
  return {fever, swallow, cough, breathing, language};
};

const mapDispatchToProps = dispatch => ({
  setFever: fever => dispatch({type: SET_FEVER, fever}),
  setBreathing: breathing => dispatch({type: SET_BREATHING, breathing}),
  setCough: cough => dispatch({type: SET_COUGH, cough}),
  setSwallow: swallow => dispatch({type: SET_SWALLOW, swallow}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormSection8);
