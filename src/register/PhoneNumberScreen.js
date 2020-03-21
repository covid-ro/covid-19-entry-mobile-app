import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles/phoneNumberScreenStyle';
import {InputField, GeneralButton} from '../core/components';
import {strings} from '../core/strings';
const PhoneNumberScreen = () => {
  return (
    <View>
      <Text style={styles.informationLabelStyle}>
        {strings.validatePhoneNumberInformationLabel}
      </Text>
      <View style={styles.phoneLabel}>
        <InputField placeholder={strings.telefon} keyboardType="number-pad" />
      </View>
      <View style={styles.buttonStyle}>
        <GeneralButton text={strings.validatePhoneNumber} />
      </View>
    </View>
  );
};

export default PhoneNumberScreen;
