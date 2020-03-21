import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {InputField} from '../core/components';
import {formSection3Styles} from './styles';
import {strings} from '../core/strings';

const FormSection3 = () => {
  const [locationValue, setLocationValue] = useState(undefined);
  const [numberValue, setNumberValue] = useState(null);

  const onLocationValueChange = useCallback(value => {
    setLocationValue(value);
  }, []);

  const onNumberValueChange = useCallback(value => {
    setNumberValue(value);
  }, []);

  return (
    <View style={formSection3Styles.container}>
      <Text style={formSection3Styles.title}>{strings.form3Label}</Text>
      <InputField
        placeholder={strings.cj}
        value={locationValue}
        onChangeText={value => onLocationValueChange(value)}
      />
      <InputField
        placeholder={strings.passportNumber}
        value={numberValue}
        onChangeText={value => onNumberValueChange(value)}
      />
    </View>
  );
};

export default FormSection3;
