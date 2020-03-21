import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SelectionButton} from '../core/components';
import {formSection11Styles} from './styles';
import {labelStyles} from '../core/styles';
import {strings} from '../core/strings';

const FormSection11 = text => {
  const [option1Selected, setOption1Selected] = useState(false);
  const [option2Selected, setOption2Selected] = useState(false);
  const [option3Selected, setOption3Selected] = useState(false);
  const [option4Selected, setOption4Selected] = useState(false);

  return (
    <View style={formSection11Styles.container}>
      <View style={formSection11Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{strings.form11Label}</Text>
      </View>
      <View style={formSection11Styles.buttonsContainer}>
        <SelectionButton
          text={strings.simptom1}
          isSelected={option1Selected}
          onPress={() => {
            setOption1Selected(!option1Selected);
          }}
        />
        <SelectionButton
          text={strings.simptom2}
          isSelected={option2Selected}
          onPress={() => {
            setOption2Selected(!option2Selected);
          }}
        />
      </View>
      <View style={formSection11Styles.buttonsContainer}>
        <SelectionButton
          text={strings.simptom3}
          isSelected={option3Selected}
          onPress={() => {
            setOption3Selected(!option3Selected);
          }}
        />
        <SelectionButton
          text={strings.simptom4}
          isSelected={option4Selected}
          onPress={() => {
            setOption4Selected(!option4Selected);
          }}
        />
      </View>
    </View>
  );
};

export default FormSection11;
