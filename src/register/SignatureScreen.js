import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import {useNavigation} from '@react-navigation/native';
import {signatureScreenStyles} from './styles';
import Orientation from 'react-native-orientation';

const SignatureScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    Orientation.lockToLandscape();
  });
  return (
    <View style={signatureScreenStyles.container}>
      <SignatureCapture
        style={signatureScreenStyles.container}
        showBorder={false}
        showTitleLabel={false}
        showNativeButtons={false}
        viewMode={'landscape'}
      />
      <View style={{backgroundColor: 'red', alignSelf: 'flex-start', paddingBottom: 25, marginLeft: 16}}>
        <Text>Salut</Text>
      </View>
    </View>
  );
};

export default SignatureScreen;
