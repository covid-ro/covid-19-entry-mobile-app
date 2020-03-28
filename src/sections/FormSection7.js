import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {formSection7Styles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton} from '../core/components';
import {strings} from '../core/strings';
import {SET_QUESTION3} from '../register/redux/actionTypes';
import {connect} from 'react-redux';

const FormSection7 = ({question3, setQuestion3}) => {
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
            setQuestion3(true);
          }}
        />
        <SelectionButton
          text={strings.nu}
          isSelected={noSelected}
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
