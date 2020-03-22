import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {InputField} from '../core/components';
import {formSection10Styles} from './styles';
import {strings} from '../core/strings';

const FormSection10 = () => {
  const [location, setLocation] = useState('');
  return (
    <View>
      <Text style={formSection10Styles.textContainer}>
        {strings.form10Label}
      </Text>

      <InputField
        placeholder={strings.form10Placeholder}
        value={location}
        onChangeText={setLocation}
      />
    </View>
  );
};

export default FormSection10;
