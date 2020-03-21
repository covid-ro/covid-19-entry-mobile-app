import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {formSection2Styles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton} from '../core/components';
import {strings} from '../core/strings';

const FormSection2 = () => {
  const [passportSelected, setPasssportSelected] = useState(false);
  const [cardSelected, setCardSelected] = useState(false);

  return (
    <View style={formSection2Styles.container}>
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
    </View>
  );
};

export default FormSection2;
