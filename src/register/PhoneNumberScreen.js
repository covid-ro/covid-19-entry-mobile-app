import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './styles/phoneNumberScreenStyle';
import {InputField, GeneralButton} from '../core/components';
import DeviceInfo from 'react-native-device-info';
import {strings} from '../core/strings';
import {roots} from '../navigation';
import {colors} from '../themes';
import {sendPhoneNumber} from '../api';

const PhoneNumberScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState(40);
  const [isSending, setIsSending] = useState(false);

  const handleSendNumber = useCallback(async () => {
    if (phoneNumber === '') {
      Alert.alert(strings.completePhoneNumber);
    } else {
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
        Alert.alert(response.data.message);
      }
    }
  }, [phoneNumber, navigation, countryCode]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Text style={styles.informationLabelStyle}>
          {strings.validatePhoneNumberInformationLabel}
        </Text>
        <View style={styles.phoneLabel}>
          <InputField
            placeholder={strings.telefon}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.buttonStyle}>
          {isSending ? (
            <ActivityIndicator size="large" color={colors.darkBlue} />
          ) : (
            <GeneralButton
              text={strings.validatePhoneNumber}
              onPress={handleSendNumber}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PhoneNumberScreen;
