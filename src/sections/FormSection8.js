import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {formSection8Styles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton} from '../core/components';
import {strings} from '../core/strings';

const FormSection8 = ({text}) => {
  const [option1Selected, setOption1Selected] = useState(false);
  const [option2Selected, setOption2Selected] = useState(false);
  const [option3Selected, setOption3Selected] = useState(false);
  const [option4Selected, setOption4Selected] = useState(false);

  return (
    <ScrollView style={formSection8Styles.container}>
      <View style={formSection8Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{strings.form8Label}</Text>
      </View>
      <View style={formSection8Styles.buttonsContainer}>
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
      <View style={formSection8Styles.buttonsContainer}>
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
    </ScrollView>
  );
};

export default FormSection8;
