import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {formSection8Styles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton} from '../core/components';
import {strings} from '../core/strings';

const FormSection8 = ({text}) => {
  const [yesSelected, setYesSelected] = useState(false);
  const [noSelected, setNoSelected] = useState(false);

  return (
    <View style={formSection8Styles.container}>
      <View style={formSection8Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{text}</Text>
      </View>
      <View style={formSection8Styles.buttonsContainer}>
        <SelectionButton
          text={strings.yes}
          isSelected={yesSelected}
          onPress={() => {
            setYesSelected(true);
            setNoSelected(false);
          }}
        />
        <SelectionButton
          text={strings.no}
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
