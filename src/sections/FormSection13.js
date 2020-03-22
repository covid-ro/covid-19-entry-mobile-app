import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {labelStyles} from '../core/styles';
import {formSection13Styles} from './styles';
import {strings} from '../core/strings';
import {InputField} from '../core/components';

const Component = () => {
  const [regNumber, setRegNumber] = useState('');
  return (
    <View>
      <View style={formSection13Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{strings.form13Label}</Text>
      </View>
      <InputField
        placeholder={strings.placeholderAutomobil}
        value={regNumber}
        onChangeText={setRegNumber}
      />
    </View>
  );
};

export default Component;
