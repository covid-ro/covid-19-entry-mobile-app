import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {InputField} from '../core/components';
import {fromSection4Styles} from './styles';
import {strings} from '../core/strings';
import {DatePicker} from 'native-base';
const FormSection4 = () => {
  const [judet, setJudet] = useState(undefined);
  const [localitate, setLocalitate] = useState(undefined);
  const [dataSosirii, setDataSosirii] = useState(undefined);
  const [dataPlecarii, setDataPlecarii] = useState(undefined);
  const [adresaCompleta, setAdresaCompleta] = useState(undefined);
  return (
    <ScrollView>
      <Text style={fromSection4Styles.topTextStyle}>{strings.form4Label}</Text>
      <View style={fromSection4Styles.inputStyle}>
        <InputField
          placeholder={strings.judet}
          value={judet}
          onChangeText={setJudet}
        />
      </View>
      <View style={fromSection4Styles.inputStyle}>
        <InputField
          placeholder={strings.localitate}
          value={localitate}
          onChangeText={setLocalitate}
        />
      </View>
      <View style={fromSection4Styles.inputStyle}>
        <InputField
          placeholder={strings.adresaCompleta}
          value={adresaCompleta}
          onChangeText={setAdresaCompleta}
        />
      </View>
      <View style={fromSection4Styles.datePickerStyle}>
        <DatePicker
          placeHolderText={strings.dataPlecarii}
          placeHolderTextStyle={fromSection4Styles.datePickerPlaceholderStyle}
          onDateChange={setDataPlecarii}
        />
        <View style={fromSection4Styles.separator} />
      </View>
      <View style={fromSection4Styles.datePickerStyle}>
        <DatePicker
          placeHolderText={strings.dataSosirii}
          placeHolderTextStyle={fromSection4Styles.datePickerPlaceholderStyle}
          onDateChange={setDataSosirii}
        />
        <View style={fromSection4Styles.separator} />
      </View>
    </ScrollView>
  );
};

export default FormSection4;
