import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './styles/phoneNumberScreenStyle';
import CountryPicker from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input';
import {GeneralButton} from '../core/components';
import DeviceInfo from 'react-native-device-info';
import {validators} from '../core/utils';
import {I18n} from '../core/strings';
import {roots} from '../navigation';
import {colors} from '../themes';
import {sendPhoneNumber} from '../api';

const PhoneNumberScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dialCode, setDialCode] = useState('+40');
  const [isFocused, setFocus] = useState();
  const [modal, setModal] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const handleSendNumber = useCallback(async () => {
    const countryCode = parseInt(dialCode, 10);
    if (phoneNumber === '') {
      Alert.alert(I18n.t('completePhoneNumber'));
    } else if (validators.phoneValidator(phoneNumber)) {
      setIsSending(true);
      const response = await sendPhoneNumber(
        phoneNumber,
        countryCode,
        DeviceInfo.getUniqueId(),
      );
      if (response.status === 200) {
        setIsSending(false);
        navigation.navigate(roots.sendCode, {phoneNumber, countryCode});
      } else {
        setIsSending(false);
        Alert.alert(I18n.t('phoneNumberError'));
      }
    } else {
      Alert.alert(I18n.t('phoneNumberError'));
    }
  }, [phoneNumber, navigation, dialCode]);
  return (
    <TouchableWithoutFeedback>
      <View>
        <Text style={styles.informationLabelStyle}>
          {I18n.t('validatePhoneNumberInformationLabel')}
        </Text>
        <View style={styles.pickerContainer}>
          <Text
            style={
              isFocused ? styles.labelPlaceholder : styles.unselectedLabel
            }>
            {I18n.t('telefon')}
          </Text>
          <PhoneInput
            initialCountry={I18n.t('ro')}
            textProps={{
              placeholder: isFocused ? '' : I18n.t('telefon'),
              onFocus: () => setFocus(true),
              onBlur: () => setFocus(false),
              style: styles.textInputPicker,
              placeholderTextColor: colors.opacityGrey,
              value: phoneNumber,
            }}
            value={I18n.t('plus') + dialCode}
            onPressFlag={() => setModal(true)}
            onChangePhoneNumber={setPhoneNumber}
          />
          <CountryPicker
            containerButtonStyle={styles.countryPicker}
            visible={modal}
            onClose={() => setModal(false)}
            onSelect={value => setDialCode(value.callingCode[0])}
            withCallingCode
            withFilter>
            <View />
          </CountryPicker>
          <View
            style={
              isFocused || phoneNumber
                ? styles.focusedSeparator
                : styles.separator
            }
          />
        </View>
        <View style={styles.buttonStyle}>
          {isSending ? (
            <ActivityIndicator size="large" color={colors.darkBlue} />
          ) : (
            <GeneralButton
              text={I18n.t('validatePhoneNumber')}
              onPress={handleSendNumber}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PhoneNumberScreen;
