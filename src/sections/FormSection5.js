import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {InputField} from '../core/components';
import {fromSection5Styles} from './styles';
import {strings} from '../core/strings';
import {images} from '../themes';

const FormSection3 = () => {
  const [locationValue, setLocationValue] = useState(undefined);
  const [numberValue, setNumberValue] = useState(null);

  return (
    <View style={fromSection5Styles.container}>
      <Text style={fromSection5Styles.topTextStyle}>{strings.form5Label}</Text>
      <InputField
        placeholder={strings.telefonValid}
        value={locationValue}
        onChangeText={setLocationValue}
      />
      <View style={fromSection5Styles.inputStyle}>
        <InputField
          placeholder={strings.email}
          value={numberValue}
          onChangeText={setNumberValue}
        />
      </View>
      <Image source={images.ic_tick} style={fromSection5Styles.imageStyle} />
      <Text style={fromSection5Styles.alertLabelStyle}>
        {strings.alertLabel}
      </Text>
      <Text style={fromSection5Styles.alertMessageStyle}>
        {strings.alertMessage}
      </Text>
    </View>
  );
};

export default FormSection3;
