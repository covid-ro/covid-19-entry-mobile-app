import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {InputField} from '../core/components';
import {formSection10Styles} from './styles';
import {strings} from '../core/strings';
import {labelStyles} from '../core/styles';

const FormSection10 = () => {
  const [location, setLocation] = useState('');
  return (
    <ScrollView>
      <Text style={[labelStyles.textStyle, formSection10Styles.textContainer]}>
        {strings.form10Label}
      </Text>
      <InputField
        placeholder={strings.form10Placeholder}
        value={location}
        onChangeText={setLocation}
        customContainerStyle={formSection10Styles.inputCustomContainer}
        customInputStyle={formSection10Styles.customInput}
        multiline={true}
        customLabelStyle={formSection10Styles.customLabel}
      />
    </ScrollView>
  );
};

export default FormSection10;
