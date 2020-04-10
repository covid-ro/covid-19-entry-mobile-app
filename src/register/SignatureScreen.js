import React, {useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import {useNavigation} from '@react-navigation/native';
import {signatureScreenStyles} from './styles';
import Orientation from 'react-native-orientation';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignatureScreen = () => {
  const navigation = useNavigation();
  let signRef = useRef(null);
  useEffect(() => {
    Orientation.lockToLandscape();
  });

  const onSave = () => {
    signRef.saveImage();
  };
  const onSaveEvent = result => {
    console.log(result.encoded);
  };
  return (
    <View style={signatureScreenStyles.container}>
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
          onPress={() => onSave()}
          style={signatureScreenStyles.deleteContainer}>
          <Text style={signatureScreenStyles.deleteStyle}>Sterge</Text>
        </TouchableOpacity>
        <View style={signatureScreenStyles.textContainer}>
          <Text style={signatureScreenStyles.textStyle}>
            Apasand Foloseste, sunt de acord ca semnatura sau reprezentarea ei
            electronica sa poata fi folosite pentru validarea acestui document
            legal, asemeni semnaturii olografice
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

export default SignatureScreen;
