import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {formSection1Styles} from './styles';
import {labelStyles} from '../core/styles';
import {InputField} from '../core/components';
import {strings} from '../core/strings';

const FormSection1 = () => {
  const [nume, setNume] = useState('');
  const [prenume, setPrenume] = useState('');
  const [CNP, setCNP] = useState('');
  return (
    <View style={formSection1Styles.container}>
      <View style={formSection1Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{strings.form1Label}</Text>
      </View>
      <InputField
        placeholder={strings.nume}
        value={nume}
        onChangeText={setNume}
        placeholderSeparatorStyle={formSection1Styles.inputPlaceholderSeparator}
      />
      <InputField
        placeholder={strings.prenume}
        value={prenume}
        onChangeText={setPrenume}
        placeholderSeparatorStyle={formSection1Styles.inputPlaceholderSeparator}
      />
      <InputField
        placeholder={strings.cnp}
        value={CNP}
        onChangeText={setCNP}
        placeholderSeparatorStyle={formSection1Styles.inputPlaceholderSeparator}
        customContainerStyle={formSection1Styles.inputFieldStyle}
      />
    </View>
  );
};

export default FormSection1;
