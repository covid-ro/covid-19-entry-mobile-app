import React from 'react';
import {View, Text, Image} from 'react-native';
import {signatureFormStyles} from './styles';
import {labelStyles} from '../core/styles';
import {I18n} from '../core/strings';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {roots} from '../navigation';

const SignatureForm = ({signature, language}) => {
  const navigation = useNavigation();
  return (
    <View style={signatureFormStyles.container}>
      <View style={signatureFormStyles.textContainer}>
        <Text style={labelStyles.textStyle}>
          {I18n.t('confirmLabel', {locale: language})}
        </Text>
      </View>
      <TouchableOpacity
        style={signatureFormStyles.signatureStyle}
        onPress={() => navigation.navigate(roots.signatureScreen)}>
        {signature !== '' ? (
          <Image
            source={{uri: `${signature}`}}
            style={signatureFormStyles.signature}
          />
        ) : (
          <Text style={signatureFormStyles.placeholderStyle}>
            {I18n.t('clickToSign', {locale: language})}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  const {signature, language} = state.register.rergisterReducer;
  return {signature, language};
};

export default connect(
  mapStateToProps,
  null,
)(SignatureForm);
