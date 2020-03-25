import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {formSection2Styles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton, InputField} from '../core/components';
import {strings} from '../core/strings';

const FormSection2 = () => {
  const [passportSelected, setPasssportSelected] = useState(false);
  const [cardSelected, setCardSelected] = useState(false);
  const [locationValue, setLocationValue] = useState(undefined);
  const [numberValue, setNumberValue] = useState(null);
  return (
    <ScrollView style={formSection2Styles.container}>
      <View style={formSection2Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{strings.form2Label}</Text>
      </View>
      <View style={formSection2Styles.buttonsContainer}>
        <SelectionButton
          text={strings.passport}
          isSelected={passportSelected}
          onPress={() => {
            setPasssportSelected(true);
            setCardSelected(false);
          }}
        />
        <SelectionButton
          text={strings.card}
          isSelected={cardSelected}
          onPress={() => {
            setPasssportSelected(false);
            setCardSelected(true);
          }}
        />
      </View>

      <Text style={formSection2Styles.title}>
        {passportSelected ? strings.addPassportInfo : strings.addICInfo}
      </Text>
      <InputField
        placeholder={strings.seria}
        value={locationValue}
        onChangeText={setLocationValue}
      />
      <InputField
        placeholder={strings.passportNumber}
        value={numberValue}
        onChangeText={setNumberValue}
        customContainerStyle={formSection2Styles.inputContainer}
      />
    </ScrollView>
  );
};

export default FormSection2;
