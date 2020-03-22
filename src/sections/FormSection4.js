import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {InputField} from '../core/components';
import {fromSection4Styles, fromSection5Styles} from './styles';
import {strings} from '../core/strings';
import { ScrollView } from 'react-native-gesture-handler';

const FormSection4 = () => {
  const [judet, setJudet] = useState(undefined);
  const [localitate, setLocalitate] = useState(undefined);
  const [dataSosirii, setDataSosirii] = useState(undefined);
  const [dataPlecarii, setDataPlecarii] = useState(undefined);
  const [adresaCompleta, setAdresaCompleta] = useState(undefined);
  return (
    <ScrollView>
      <Text style={fromSection4Styles.topTextStyle}>{strings.form4Label}</Text>
      <View style={fromSection5Styles.inputStyle}>
        <InputField
          placeholder={strings.judet}
          value={judet}
          onChangeText={setJudet}
        />
      </View>
      <View style={fromSection5Styles.inputStyle}>
        <InputField
          placeholder={strings.localitate}
          value={localitate}
          onChangeText={setLocalitate}
        />
      </View>
      <View style={fromSection5Styles.inputStyle}>
        <InputField
          placeholder={strings.dataSosirii}
          value={dataSosirii}
          onChangeText={setDataSosirii}
        />
      </View>
      <View style={fromSection5Styles.inputStyle}>
        <InputField
          placeholder={strings.dataPlecarii}
          value={dataPlecarii}
          onChangeText={setDataPlecarii}
        />
      </View>
      <View style={fromSection5Styles.inputStyle}>
        <InputField
          placeholder={strings.adresaCompleta}
          value={adresaCompleta}
          onChangeText={setAdresaCompleta}
        />
      </View>
    </ScrollView>
  );
};

export default FormSection4;
