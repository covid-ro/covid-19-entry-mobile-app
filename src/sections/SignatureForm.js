import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {signatureFormStyles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton} from '../core/components';
import {I18n} from '../core/strings';
import {SET_QUESTION3} from '../register/redux/actionTypes';
import {connect} from 'react-redux';
import SignatureCapture from 'react-native-signature-capture';

const SignatureForm = () => {
  const [yesSelected, setYesSelected] = useState(false);
  const [noSelected, setNoSelected] = useState(false);

  return (
    <View style={signatureFormStyles.container}>
      <View style={signatureFormStyles.textContainer}>
        <Text style={labelStyles.textStyle}>{I18n.t('confirmLabel')}</Text>
      </View>

      <SignatureCapture
        style={[signatureFormStyles.flex, signatureFormStyles.signatureStyle]}
        onSaveEvent={() => console.log('save')}
        onDragEvent={() => console.log('drag')}
        saveImageFileInExtStorage={false}
        showNativeButtons={false}
        showTitleLabel={false}
        viewMode={'portrait'}
      />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignatureForm);
