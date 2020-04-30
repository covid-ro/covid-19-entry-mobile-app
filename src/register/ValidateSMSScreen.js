import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, Alert, ActivityIndicator} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import styles from './styles/validateSMSScreenStyle';
import {InputField, GeneralButton} from '../core/components';
import {I18n} from '../core/strings';
import {TimerHeader} from '../register/components';
import {TouchableOpacity} from 'react-native';
import {roots} from '../navigation';
import {sendPhoneNumber, sendCode} from '../api';
import {colors} from '../themes';
import {connect} from 'react-redux';
import {SET_PHONE_NUMBER, SET_USER_TOKEN} from './redux/actionTypes';

const ValidateSMSScreen = ({
  route,
  navigation,
  setPhoneNumber,
  setUserToken,
  language,
}) => {
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
      Alert.alert(I18n.t('backEndError', {locale: language}));
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
      Alert.alert(I18n.t('invalidSMSCode', {locale: language}));
    }
  }, [code, navigation, route, setPhoneNumber, setUserToken, language]);

  return (
    <View>
      <TimerHeader step={step} />
      <Text style={styles.addCodeLabelStyle}>
        {I18n.t('addSMSCode', {locale: language})}
      </Text>
      <View style={styles.inputFieldStyle}>
        <InputField
          placeholder={I18n.t('validationSMSCode', {locale: language})}
          keyboardType="number-pad"
          value={code}
          onChangeText={setCode}
        />
      </View>
      <View style={styles.saveButtonStyle}>
        {isSending ? (
          <ActivityIndicator size="large" color={colors.darkBlue} />
        ) : (
          <GeneralButton
            text={I18n.t('save', {locale: language})}
            onPress={handleSendCode}
          />
        )}
      </View>
      <Text style={styles.questionLabelStyle}>
        {I18n.t('dontReceiveTheCode', {locale: language})}
      </Text>
      <TouchableOpacity
        style={styles.resendSMSButtonStyle}
        onPress={handleSendNumber}>
        <Text style={styles.resendSMSTextStyle}>
          {I18n.t('resendSMSCod', {locale: language})}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  const {language} = state.register.rergisterReducer;
  return {language};
};

const mapDispatchToProps = dispatch => ({
  setPhoneNumber: phoneNumber =>
    dispatch({type: SET_PHONE_NUMBER, phoneNumber}),
  setUserToken: userToken => dispatch({type: SET_USER_TOKEN, userToken}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ValidateSMSScreen);
