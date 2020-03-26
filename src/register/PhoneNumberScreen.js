import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input';
import styles from './styles/phoneNumberScreenStyle';
import {InputField, GeneralButton} from '../core/components';
import {strings} from '../core/strings';
import {roots} from '../navigation';

const PhoneNumberScreen = ({navigation}) => {
  const [flag, setFlag] = useState('ro');
  const [phoneNumber, setPhoneNumber] = useState();
  const [dialCode, setDialCode] = useState('+40');
  const [country, setCountry] = useState();
  const [isFocused, setFocus] = useState();
  const [modal, setModal] = useState(false);
  let phoneRef = useRef(null);

  console.log(dialCode);
  return (
    <TouchableWithoutFeedback>
      <View>
        <Text style={styles.informationLabelStyle}>
          {strings.validatePhoneNumberInformationLabel}
        </Text>
        <View style={styles.pickerContainer}>
          <Text
            style={
              isFocused ? styles.labelPlaceholder : styles.unselectedLabel
            }>
            {strings.telefon}
          </Text>
          <PhoneInput
            ref={phoneRef}
            initialCountry={'ro'}
            textProps={{
              placeholder: strings.telefon,
              onFocus: () => setFocus(true),
              onBlur: () => setFocus(false),
            }}
            value={phoneNumber}
            onPressFlag={() => setModal(true)}
            onChangePhoneNumber={setPhoneNumber}
            autoFormat={true}
          />
          {modal && (
            <CountryPicker
              visible={modal}
              onClose={() => setModal(false)}
              withCallingCode
              onSelect={value => {
                setCountry(value.cca2.toLowerCase());
                setPhoneNumber('+' + value.callingCode[0]);
                setDialCode('+' + value.callingCode[0]);
              }}>
              <View />
            </CountryPicker>
          )}
          <View
            style={
              isFocused || phoneNumber?.length - 1 > dialCode?.length - 1
                ? styles.focusedSeparator
                : styles.separator
            }
          />
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
