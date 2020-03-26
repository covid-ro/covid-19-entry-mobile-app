import React, {useState, useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {formSection1Styles} from './styles';
import {labelStyles} from '../core/styles';
import {InputField} from '../core/components';
import {strings} from '../core/strings';

const FormSection1 = () => {
  const [nume, setNume] = useState('');
  const [prenume, setPrenume] = useState('');
  const [CNP, setCNP] = useState('');
  const prenumeRef = useRef(null);
  const CNPRef = useRef(null);
  return (
    <ScrollView style={formSection1Styles.container}>
      <View style={formSection1Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{strings.form1Label}</Text>
      </View>
      <InputField
        placeholder={strings.nume}
        value={nume}
        onChangeText={setNume}
        returnKeyType={'next'}
        onSubmitEditing={() => {
          prenumeRef.current.focus();
        }}
        blurOnSubmit={false}
        placeholderSeparatorStyle={formSection1Styles.inputPlaceholderSeparator}
      />
      <InputField
        inputRef={prenumeRef}
        placeholder={strings.prenume}
        value={prenume}
        onChangeText={setPrenume}
        returnKeyType={'next'}
        onSubmitEditing={() => {
          CNPRef.current.focus();
        }}
        blurOnSubmit={false}
        placeholderSeparatorStyle={formSection1Styles.inputPlaceholderSeparator}
      />
      <InputField
        inputRef={CNPRef}
        placeholder={strings.cnp}
        value={CNP}
        onChangeText={setCNP}
        placeholderSeparatorStyle={formSection1Styles.inputPlaceholderSeparator}
        customContainerStyle={formSection1Styles.inputFieldStyle}
      />
    </ScrollView>
  );
};

export default FormSection1;
