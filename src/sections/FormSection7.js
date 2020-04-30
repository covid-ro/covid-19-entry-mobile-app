import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {formSection7Styles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton} from '../core/components';
import {I18n} from '../core/strings';
import {SET_QUESTION3} from '../register/redux/actionTypes';
import {connect} from 'react-redux';

const FormSection7 = ({question3, setQuestion3, language}) => {
  const [yesSelected, setYesSelected] = useState(false);
  const [noSelected, setNoSelected] = useState(false);

  return (
    <View style={formSection7Styles.container}>
      <View style={formSection7Styles.textContainer}>
        <Text style={labelStyles.textStyle}>
          {I18n.t('form7Label', {locale: language})}
        </Text>
      </View>
      <View style={formSection7Styles.buttonsContainer}>
        <SelectionButton
          text={I18n.t('da', {locale: language})}
          isSelected={question3 !== '' ? yesSelected : false}
          onPress={() => {
            setYesSelected(true);
            setNoSelected(false);
            setQuestion3(true);
          }}
        />
        <SelectionButton
          text={I18n.t('nu', {locale: language})}
          isSelected={question3 !== '' ? noSelected : false}
          onPress={() => {
            setYesSelected(false);
            setNoSelected(true);
            setQuestion3(false);
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  const {question3, language} = state.register.rergisterReducer;
  return {question3, language};
};

const mapDispatchToProps = dispatch => ({
  setQuestion3: question3 => dispatch({type: SET_QUESTION3, question3}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormSection7);
