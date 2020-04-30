import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SelectionButton} from '../core/components';
import {formSection6Styles} from './styles';
import {I18n} from '../core/strings';
import {labelStyles} from '../core/styles';
import {connect} from 'react-redux';
import {SET_QUESTION1, SET_QUESTION2} from '../register/redux/actionTypes';

const FormSection6 = ({
  question1,
  question2,
  setQuestion1,
  setQuestion2,
  language,
}) => {
  const [checkedFirstYES, setcheckedFirstYES] = useState(false);
  const [checkedFirstNO, setcheckedFirstNO] = useState(false);
  const [checkedSecondYES, setcheckedSecondYES] = useState(false);
  const [checkedSecondNO, setcheckedSecondNO] = useState(false);

  return (
    <View style={formSection6Styles.container}>
      <View style={formSection6Styles.textContainer}>
        <Text style={[labelStyles.textStyle, formSection6Styles.textStyle]}>
          {I18n.t('form6FirstQuestion', {locale: language})}
        </Text>
      </View>
      <View style={formSection6Styles.buttonsContainer}>
        <SelectionButton
          text={I18n.t('da', {locale: language})}
          isSelected={question1 !== '' ? checkedFirstYES : false}
          onPress={() => {
            setcheckedFirstYES(true);
            setcheckedFirstNO(false);
            setQuestion1(true);
          }}
        />
        <SelectionButton
          text={I18n.t('nu', {locale: language})}
          isSelected={question1 !== '' ? checkedFirstNO : false}
          onPress={() => {
            setcheckedFirstYES(false);
            setcheckedFirstNO(true);
            setQuestion1(false);
          }}
        />
      </View>
      <View style={formSection6Styles.textContainer}>
        <Text style={[labelStyles.textStyle, formSection6Styles.textStyle]}>
          {I18n.t('form6SecondQuestion', {locale: language})}
        </Text>
      </View>
      <View style={formSection6Styles.buttonsContainer}>
        <SelectionButton
          text={I18n.t('da', {locale: language})}
          isSelected={question2 !== '' ? checkedSecondYES : false}
          onPress={() => {
            setcheckedSecondYES(true);
            setcheckedSecondNO(false);
            setQuestion2(true);
          }}
        />
        <SelectionButton
          text={I18n.t('nu', {locale: language})}
          isSelected={question2 !== '' ? checkedSecondNO : false}
          onPress={() => {
            setcheckedSecondYES(false);
            setcheckedSecondNO(true);
            setQuestion2(false);
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  const {question1, question2, language} = state.register.rergisterReducer;
  return {question1, question2, language};
};

const mapDispatchToProps = dispatch => ({
  setQuestion1: question1 => dispatch({type: SET_QUESTION1, question1}),
  setQuestion2: question2 => dispatch({type: SET_QUESTION2, question2}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormSection6);
