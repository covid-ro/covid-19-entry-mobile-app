import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {InputField} from '../core/components';
import {formSection5Styles} from './styles';
import {strings} from '../core/strings';
import {images} from '../themes';

const FormSection3 = () => {
  const [locationValue, setLocationValue] = useState(undefined);
  const [numberValue, setNumberValue] = useState(null);

  return (
    <View style={formSection5Styles.container}>
      <Text style={formSection5Styles.topTextStyle}>{strings.form5Label}</Text>
      <View>
        <InputField
          placeholder={strings.telefonValid}
          value={locationValue}
          onChangeText={setLocationValue}
        />
        <Image source={images.ic_tick} style={formSection5Styles.imageStyle} />
      </View>
      <View style={formSection5Styles.inputStyle}>
        <InputField
          placeholder={strings.email}
          value={numberValue}
          onChangeText={setNumberValue}
        />
      </View>

      <Text style={formSection5Styles.alertLabelStyle}>
        {strings.alertLabel}
      </Text>
      <Text style={formSection5Styles.alertMessageStyle}>
        {strings.alertMessage}
      </Text>
    </View>
  );
};

export default FormSection3;
