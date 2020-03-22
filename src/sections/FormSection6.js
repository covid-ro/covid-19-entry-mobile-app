import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {InputField, SelectionButton} from '../core/components';
import {formSection6Styles} from './styles';
import {strings} from '../core/strings';

const FormSection6 = () => {
  const [checkedFirstYES, setcheckedFirstYES] = useState(false);
  const [checkedFirstNO, setcheckedFirstNO] = useState(false);
  const [checkedSecondYES, setcheckedSecondYES] = useState(false);
  const [checkedSecondNO, setcheckedSecondNO] = useState(false);
  return (
    <View style={formSection6Styles.container}>
      <View style={formSection6Styles.textContainer}>
        <Text style={formSection6Styles.textStyle}>
          {strings.form6FirstQuestion}
        </Text>
      </View>
      <View style={formSection6Styles.buttonsContainer}>
        <SelectionButton
          text={strings.da}
          isSelected={checkedFirstYES}
          onPress={() => {
            setcheckedFirstYES(true);
            setcheckedFirstNO(false);
          }}
        />
        <SelectionButton
          text={strings.nu}
          isSelected={checkedFirstNO}
          onPress={() => {
            setcheckedFirstYES(false);
            setcheckedFirstNO(true);
          }}
        />
      </View>
      <View style={formSection6Styles.textContainer}>
        <Text style={formSection6Styles.textStyle}>
          {strings.form6SecondQuestion}
        </Text>
      </View>
      <View style={formSection6Styles.buttonsContainer}>
        <SelectionButton
          text={strings.da}
          isSelected={checkedSecondYES}
          onPress={() => {
            setcheckedSecondYES(true);
            setcheckedSecondNO(false);
          }}
        />
        <SelectionButton
          text={strings.nu}
          isSelected={checkedSecondNO}
          onPress={() => {
            setcheckedSecondYES(false);
            setcheckedSecondNO(true);
          }}
        />
      </View>
    </View>
  );
};

export default FormSection6;
