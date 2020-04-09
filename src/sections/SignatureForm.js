import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {signatureFormStyles} from './styles';
import {labelStyles} from '../core/styles';
import {I18n} from '../core/strings';
import {SET_QUESTION3} from '../register/redux/actionTypes';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignatureForm = () => {
  return (
    <View style={signatureFormStyles.container}>
      <View style={signatureFormStyles.textContainer}>
        <Text style={labelStyles.textStyle}>{I18n.t('confirmLabel')}</Text>
      </View>
      <TouchableOpacity style={signatureFormStyles.signatureStyle}>
        <Text style={signatureFormStyles.placeholderStyle}>
          {I18n.t('clickToSign')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  const {question3} = state.register.rergisterReducer;
  return {question3};
};

const mapDispatchToProps = dispatch => ({
  setQuestion3: question3 => dispatch({type: SET_QUESTION3, question3}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignatureForm);
