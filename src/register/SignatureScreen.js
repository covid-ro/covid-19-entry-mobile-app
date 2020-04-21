import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {signatureScreenStyles} from './styles';
import Orientation from 'react-native-orientation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BackButton} from '../core/components';
import {I18n} from '../core/strings/index';
import {SET_SIGNATURE} from './redux/actionTypes';
import SignaturePad from 'react-native-signature-pad';

const SignatureScreen = ({setSignature}) => {
  const [localSignature, setLocalSignature] = useState('');
  const [signatureKey, setSignatureKey] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    Orientation.lockToLandscapeRight();
  }, []);

  const onSaveSignature = () => {
    setSignature(localSignature);
    Orientation.lockToPortrait();
    navigation.goBack();
  };

  const onResetSignature = () => {
    setSignatureKey(signatureKey + 1);
  };

  const onSaveEvent = ({base64DataUrl}) => {
    setLocalSignature(base64DataUrl);
  };

  return (
    <View style={signatureScreenStyles.container}>
      <View style={signatureScreenStyles.header}>
        <BackButton
          onPress={() => {
            Orientation.lockToPortrait();
          }}
        />
        <Text>{I18n.t('signatureScreenTitle')}</Text>
        <TouchableOpacity
          onPress={() => onSaveSignature()}
          style={signatureScreenStyles.headerButton}>
          <Text style={signatureScreenStyles.deleteStyle}>{I18n.t('use')}</Text>
        </TouchableOpacity>
      </View>
      <SignaturePad
        style={signatureScreenStyles.signatureArea}
        onChange={onSaveEvent}
        key={signatureKey}
      />
      <View style={signatureScreenStyles.bottom}>
        <TouchableOpacity
          onPress={() => onResetSignature()}
          style={signatureScreenStyles.deleteContainer}>
          <Text style={signatureScreenStyles.deleteStyle}>
            {I18n.t('erase')}
          </Text>
        </TouchableOpacity>
        <View style={signatureScreenStyles.textContainer}>
          <Text style={signatureScreenStyles.textStyle}>
            {I18n.t('signatureDetails')}
          </Text>
        </View>
      </View>
    </View>
  );
};
const mapDispatchToProps = dispatch => ({
  setSignature: signature => dispatch({type: SET_SIGNATURE, signature}),
});
export default connect(
  null,
  mapDispatchToProps,
)(SignatureScreen);
