import React, {useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import SignatureCapture from 'react-native-signature-capture';
import {useNavigation} from '@react-navigation/native';
import {signatureScreenStyles} from './styles';
import Orientation from 'react-native-orientation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BackButton} from '../core/components';
import {I18n} from '../core/strings/index';
import {SET_SIGNATURE} from './redux/actionTypes';

const SignatureScreen = ({setSignature}) => {
  const navigation = useNavigation();
  let signRef = useRef(null);

  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  const onSaveSignature = () => {
    signRef.saveImage();
    Orientation.lockToPortrait();
    navigation.goBack();
  };

  const onResetSignature = () => {
    signRef.resetImage();
  };

  const onSaveEvent = result => {
    setSignature(result.encoded);
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

      <SignatureCapture
        ref={ref => (signRef = ref)}
        style={signatureScreenStyles.signatureArea}
        showBorder={false}
        onSaveEvent={onSaveEvent}
        showTitleLabel={false}
        showNativeButtons={false}
        viewMode={'landscape'}
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
SignatureScreen.navigationOptions = ({navigation}) => {
  return {
    title: 'Home',
  };
};

const mapDispatchToProps = dispatch => ({
  setSignature: signature => dispatch({type: SET_SIGNATURE, signature}),
});
export default connect(
  null,
  mapDispatchToProps,
)(SignatureScreen);
