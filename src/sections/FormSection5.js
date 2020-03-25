import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {InputField} from '../core/components';
import {formSection5Styles} from './styles';
import {strings} from '../core/strings';
import {images} from '../themes';
import {labelStyles} from '../core/styles';

const FormSection3 = () => {
  const [locationValue, setLocationValue] = useState(undefined);
  const [numberValue, setNumberValue] = useState(null);

  return (
    <ScrollView style={formSection5Styles.container}>
      <Text style={[labelStyles.textStyle, formSection5Styles.topTextStyle]}>
        {strings.form5Label}
      </Text>
      <View>
        <InputField
          placeholder={strings.telefonValid}
          value={locationValue}
          onChangeText={setLocationValue}
        />
        <Image source={images.ic_tick} style={formSection5Styles.imageStyle} />
      </View>
      <InputField
        placeholder={strings.email}
        value={numberValue}
        onChangeText={setNumberValue}
        autoCapitalize={'none'}
      />
      <Text style={formSection5Styles.alertLabelStyle}>
        {strings.alertLabel}
      </Text>
      <Text
        style={[labelStyles.textStyle, formSection5Styles.alertMessageStyle]}>
        {strings.alertMessage}
      </Text>
    </ScrollView>
  );
};

export default FormSection3;
