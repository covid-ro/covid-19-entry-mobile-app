import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {signatureFormStyles} from './styles';
import {labelStyles} from '../core/styles';
import {I18n} from '../core/strings';
import {SET_QUESTION3} from '../register/redux/actionTypes';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {roots} from '../navigation';

const SignatureForm = ({signature}) => {
  const navigation = useNavigation();
  return (
    <View style={signatureFormStyles.container}>
      <View style={signatureFormStyles.textContainer}>
        <Text style={labelStyles.textStyle}>{I18n.t('confirmLabel')}</Text>
      </View>
      <TouchableOpacity
        style={signatureFormStyles.signatureStyle}
        onPress={() => navigation.navigate(roots.signatureScreen)}>
        {signature !== '' ? (
          <Image
            source={{uri: `data:image/png;base64,${signature}`}}
            style={signatureFormStyles.signature}
          />
        ) : (
          <Text style={signatureFormStyles.placeholderStyle}>
            {I18n.t('clickToSign')}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  const {signature} = state.register.rergisterReducer;
  return {signature};
};

export default connect(
  mapStateToProps,
  null,
)(SignatureForm);
