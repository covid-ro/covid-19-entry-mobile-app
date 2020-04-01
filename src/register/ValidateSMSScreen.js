import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, Alert, ActivityIndicator} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import styles from './styles/validateSMSScreenStyle';
import {InputField, GeneralButton} from '../core/components';
import {strings} from '../core/strings';
import {TimerHeader} from '../register/components';
import {TouchableOpacity} from 'react-native';
import {roots} from '../navigation';
import {sendPhoneNumber, sendCode} from '../api';
import {colors} from '../themes';
import {connect} from 'react-redux';
import {SET_PHONE_NUMBER} from './redux/actionTypes';
import {setUserToken} from '../core/utils';

const ValidateSMSScreen = ({route, navigation, setPhoneNumber}) => {
  const [step, setStep] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [code, setCode] = useState('');

  useEffect(() => {
    if (step < 30) {
      setTimeout(() => setStep(step + 1), 1000);
    }
  }, [step, setStep]);

  const handleSendNumber = useCallback(async () => {
    const {phoneNumber, countryCode} = route.params;
    const response = await sendPhoneNumber(
      phoneNumber,
      countryCode,
      DeviceInfo.getUniqueId(),
    );

    if (response.status !== 200) {
      Alert.alert(response.data.message);
    } else {
      setStep(0);
    }
  }, [route]);

  const handleSendCode = useCallback(async () => {
    const {phoneNumber} = route.params;
    setIsSending(true);
    const response = await sendCode(code, DeviceInfo.getUniqueId());
    if (response.status === 200) {
      setUserToken(response.data.token);
      setIsSending(false);
      setPhoneNumber(phoneNumber);
      navigation.navigate(roots.registerStack);
    } else {
      setIsSending(false);
      Alert.alert(response.data.message);
    }
  }, [code, navigation, route, setPhoneNumber]);

  return (
    <View>
      <TimerHeader step={step} />
      <Text style={styles.addCodeLabelStyle}>{strings.addSMSCode}</Text>
      <View style={styles.inputFieldStyle}>
        <InputField
          placeholder={strings.codValidareSMS}
          keyboardType="number-pad"
          value={code}
          onChangeText={setCode}
        />
      </View>
      <View style={styles.saveButtonStyle}>
        {isSending ? (
          <ActivityIndicator size="large" color={colors.darkBlue} />
        ) : (
        <GeneralButton text={strings.save} onPress={handleSendCode} />
        )}
      </View>
      <Text style={styles.questionLabelStyle}>
        {strings.dontReceiveTheCode}
      </Text>
      <TouchableOpacity
        style={styles.resendSMSButtonStyle}
        onPress={handleSendNumber}>
        <Text style={styles.resendSMSTextStyle}>{strings.resendSMSCod}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  setPhoneNumber: phoneNumber =>
    dispatch({type: SET_PHONE_NUMBER, phoneNumber}),
});

export default connect(null, mapDispatchToProps)(ValidateSMSScreen);
