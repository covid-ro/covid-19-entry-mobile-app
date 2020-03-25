import React, {useRef, useState} from 'react';
import {View, Text, Keyboard, TouchableWithoutFeedback} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';
import styles from './styles/phoneNumberScreenStyle';
import {InputField, GeneralButton} from '../core/components';
import {strings} from '../core/strings';
import {roots} from '../navigation';

const PhoneNumberScreen = ({navigation}) => {
  let phone = useRef(null);
  const [flag, setFlag] = useState('ro');

  const inputComponent = () => {
    return (
      <InputField
        placeholder={strings.telefon}
        defaultValue={'+40'}
        keyboardType="number-pad"
      />
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Text style={styles.informationLabelStyle}>
          {strings.validatePhoneNumberInformationLabel}
        </Text>

        <PhoneInput
          ref={ref => {
            phone = ref;
          }}
          initialCountry={flag}
          flagStyle={styles.flagStyle}
          style={styles.phoneLabel}
          textComponent={inputComponent}
        />

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
