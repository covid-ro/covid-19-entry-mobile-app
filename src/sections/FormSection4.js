import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {InputField} from '../core/components';
import {formSection4Styles} from './styles';
import {strings} from '../core/strings';
import {DatePicker} from 'native-base';
import {labelStyles} from '../core/styles';
const FormSection4 = () => {
  const [judet, setJudet] = useState(undefined);
  const [localitate, setLocalitate] = useState(undefined);
  const [dataSosirii, setDataSosirii] = useState(undefined);
  const [dataPlecarii, setDataPlecarii] = useState(undefined);
  const [adresaCompleta, setAdresaCompleta] = useState(undefined);
  const [recompleteForm, setRecompleteForm] = useState(false);
  return (
    <ScrollView style={formSection4Styles.container}>
      <Text style={[labelStyles.textStyle, formSection4Styles.topTextStyle]}>
        {strings.form4Label}
      </Text>
      <InputField
        placeholder={strings.judet}
        value={judet}
        onChangeText={setJudet}
        placeholderSeparatorStyle={formSection4Styles.inputPlaceholderSeparator}
      />
      <InputField
        placeholder={strings.localitate}
        value={localitate}
        onChangeText={setLocalitate}
        customContainerStyle={formSection4Styles.inputStyle}
        placeholderSeparatorStyle={formSection4Styles.inputPlaceholderSeparator}
      />
      <View style={formSection4Styles.datepickerContainer}>
        <DatePicker
          placeHolderText={strings.dataPlecarii}
          placeHolderTextStyle={formSection4Styles.datePickerPlaceholderStyle}
          onDateChange={setDataPlecarii}
          textStyle={formSection4Styles.datePickerTextStyle}
        />
        <View style={formSection4Styles.separator} />
      </View>
      <View style={formSection4Styles.datepickerContainer}>
        <DatePicker
          placeHolderText={strings.dataSosirii}
          placeHolderTextStyle={formSection4Styles.datePickerPlaceholderStyle}
          onDateChange={setDataSosirii}
          textStyle={formSection4Styles.datePickerTextStyle}
        />
        <View style={formSection4Styles.separator} />
      </View>
      <InputField
        placeholder={strings.adresaCompleta}
        value={adresaCompleta}
        onChangeText={setAdresaCompleta}
        placeholderSeparatorStyle={formSection4Styles.inputPlaceholderSeparator}
      />
      {recompleteForm && (
        <View style={formSection4Styles.recompleteTextContainer}>
          <Text style={formSection4Styles.grayText}>
            {strings.aceleasiDateAnterioare}
          </Text>
          <TouchableOpacity>
            <Text style={formSection4Styles.blueText}>
              {strings.folosesteDateAnterioare}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default FormSection4;
