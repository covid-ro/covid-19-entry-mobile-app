import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {InputField} from '../core/components';
import {fromSection3Styles} from './styles';
import {strings} from '../core/strings';

const FormSection3 = () => {
  const [locationValue, setLocationValue] = useState(undefined);
  const [numberValue, setNumberValue] = useState(null);

  return (
    <View style={fromSection3Styles.container}>
      <Text style={fromSection3Styles.title}>{strings.form3Label}</Text>
      <InputField
        placeholder={strings.cj}
        value={locationValue}
        onChangeText={setLocationValue}
      />
      <InputField
        placeholder={strings.passportNumber}
        value={numberValue}
        onChangeText={setNumberValue}
      />
    </View>
  );
};

export default FormSection3;
