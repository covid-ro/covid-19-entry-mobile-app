import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {formSection7Styles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton} from '../core/components';
import {strings} from '../core/strings';

const FormSection8 = () => {
  const [yesSelected, setYesSelected] = useState(false);
  const [noSelected, setNoSelected] = useState(false);

  return (
    <View style={formSection7Styles.container}>
      <View style={formSection7Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{strings.form7Label}</Text>
      </View>
      <View style={formSection7Styles.buttonsContainer}>
        <SelectionButton
          text={strings.da}
          isSelected={yesSelected}
          onPress={() => {
            setYesSelected(true);
            setNoSelected(false);
          }}
        />
        <SelectionButton
          text={strings.nu}
          isSelected={noSelected}
          onPress={() => {
            setYesSelected(false);
            setNoSelected(true);
          }}
        />
      </View>
    </View>
  );
};

export default FormSection8;
