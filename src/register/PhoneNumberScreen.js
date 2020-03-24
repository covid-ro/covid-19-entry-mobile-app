import React from 'react';
import {View, Text, Keyboard, TouchableWithoutFeedback} from 'react-native';
import styles from './styles/phoneNumberScreenStyle';
import {InputField, GeneralButton} from '../core/components';
import {strings} from '../core/strings';
import {roots} from '../navigation';

const PhoneNumberScreen = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Text style={styles.informationLabelStyle}>
          {strings.validatePhoneNumberInformationLabel}
        </Text>
        <View style={styles.phoneLabel}>
          <InputField placeholder={strings.telefon} keyboardType="number-pad" />
        </View>
        <View style={styles.buttonStyle}>
          <GeneralButton
            text={strings.validatePhoneNumber}
            onPress={() => navigation.navigate(roots.sendCode)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PhoneNumberScreen;
