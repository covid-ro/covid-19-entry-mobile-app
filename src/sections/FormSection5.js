import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {InputField} from '../core/components';
import {formSection5Styles} from './styles';
import {strings} from '../core/strings';
import {images} from '../themes';
import {labelStyles} from '../core/styles';

const FormSection3 = () => {
  const [locationValue, setLocationValue] = useState(undefined);
  const [numberValue, setNumberValue] = useState(null);

  return (
    <View style={formSection5Styles.container}>
      <Text style={[labelStyles.textStyle, formSection5Styles.topTextStyle]}>
        {strings.form5Label}
      </Text>
      <InputField
        placeholder={strings.telefonValid}
        value={locationValue}
        onChangeText={setLocationValue}
      />
      <InputField
        placeholder={strings.email}
        value={numberValue}
        onChangeText={setNumberValue}
      />
      <Text style={formSection5Styles.alertLabelStyle}>
        {strings.alertLabel}
      </Text>
      <Text
        style={[labelStyles.textStyle, formSection5Styles.alertMessageStyle]}>
        {strings.alertMessage}
      </Text>
    </View>
  );
};

export default FormSection3;
