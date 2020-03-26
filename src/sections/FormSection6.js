import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SelectionButton} from '../core/components';
import {formSection6Styles} from './styles';
import {strings} from '../core/strings';
import {labelStyles} from '../core/styles';
import {connect} from 'react-redux';
import {
  SET_QUESTION1,
  SET_QUESTION2,
  SET_QUESTION3,
} from '../register/redux/actionTypes';

const FormSection6 = ({
  question1,
  question2,
  question3,
  setQuestion1,
  setQuestion2,
  setQuestion3,
}) => {
  const [checkedFirstYES, setcheckedFirstYES] = useState(false);
  const [checkedFirstNO, setcheckedFirstNO] = useState(false);
  const [checkedSecondYES, setcheckedSecondYES] = useState(false);
  const [checkedSecondNO, setcheckedSecondNO] = useState(false);

  return (
    <ScrollView style={formSection6Styles.container}>
      <View style={formSection6Styles.textContainer}>
        <Text style={[labelStyles.textStyle, formSection6Styles.textStyle]}>
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
            setQuestion1(true);
          }}
        />
        <SelectionButton
          text={strings.nu}
          isSelected={checkedFirstNO}
          onPress={() => {
            setcheckedFirstYES(false);
            setcheckedFirstNO(true);
            setQuestion1(false);
          }}
        />
      </View>
      <View style={formSection6Styles.textContainer}>
        <Text style={[labelStyles.textStyle, formSection6Styles.textStyle]}>
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
            setQuestion2(true);
          }}
        />
        <SelectionButton
          text={strings.nu}
          isSelected={checkedSecondNO}
          onPress={() => {
            setcheckedSecondYES(false);
            setcheckedSecondNO(true);
            setQuestion2(false);
          }}
        />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  const {question1, question2} = state.register.rergisterReducer;
  return {question1, question2};
};

const mapDispatchToProps = dispatch => ({
  setQuestion1: question1 => dispatch({type: SET_QUESTION1, question1}),
  setQuestion2: question2 => dispatch({type: SET_QUESTION2, question2}),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSection6);
