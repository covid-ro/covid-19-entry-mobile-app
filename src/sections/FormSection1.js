import React from 'react';
import {View, Text} from 'react-native';
import {formSection1Styles} from './styles';
import {labelStyles} from '../core/styles';
import {InputField} from '../core/components';
import {strings} from '../core/strings';

const FormSection1 = () => {
  return (
    <View style={formSection1Styles.container}>
      <View style={formSection1Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{strings.form1Label}</Text>
      </View>

      <View style={formSection1Styles.inputFieldStyle}>
        <InputField placeholder={strings.nume} />
      </View>
      <View style={formSection1Styles.inputFieldStyle}>
        <InputField placeholder={strings.prenume} />
      </View>
      <View style={formSection1Styles.inputFieldStyle}>
        <InputField placeholder={strings.cnp} />
      </View>
    </View>
  );
};

export default FormSection1;
