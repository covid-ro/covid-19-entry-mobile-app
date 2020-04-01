import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {formSection7Styles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton} from '../core/components';
import {I18n} from '../core/strings';
import {SET_QUESTION3} from '../register/redux/actionTypes';
import {connect} from 'react-redux';

const FormSection7 = ({question3, setQuestion3}) => {
  const [yesSelected, setYesSelected] = useState(false);
  const [noSelected, setNoSelected] = useState(false);

  return (
    <View style={formSection7Styles.container}>
      <View style={formSection7Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{I18n.t('form7Label')}</Text>
      </View>
      <View style={formSection7Styles.buttonsContainer}>
        <SelectionButton
          text={I18n.t('da')}
          isSelected={question3 !== '' ? yesSelected : false}
          onPress={() => {
            setYesSelected(true);
            setNoSelected(false);
            setQuestion3(true);
          }}
        />
        <SelectionButton
          text={I18n.t('nu')}
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
  const {question3} = state.register.rergisterReducer;
  return {question3};
};

const mapDispatchToProps = dispatch => ({
  setQuestion3: question3 => dispatch({type: SET_QUESTION3, question3}),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSection7);
