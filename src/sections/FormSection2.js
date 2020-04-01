import React, {useState, useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {formSection2Styles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton, InputField} from '../core/components';
import {I18n} from '../core/strings';
import {connect} from 'react-redux';
import {
  SET_DOCUMENT_TYPE,
  SET_DOCUMENT_NUMBER,
  SET_DOCUMENT_SERIES,
} from '../register/redux/actionTypes';

const FormSection2 = ({
  documentType,
  documentNumber,
  documentSeries,
  setDocumentType,
  setDocumentNumber,
  setDocumentSeries,
}) => {
  const [passportSelected, setPasssportSelected] = useState(false);
  const [cardSelected, setCardSelected] = useState(false);
  const numberRef = useRef(null);
  return (
    <View style={formSection2Styles.container}>
      <View style={formSection2Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{I18n.t('form2Label')}</Text>
      </View>
      <View style={formSection2Styles.buttonsContainer}>
        <SelectionButton
          text={I18n.t('passport')}
          isSelected={documentType !== '' ? passportSelected : false}
          onPress={() => {
            setPasssportSelected(true);
            setCardSelected(false);
            setDocumentType('passport');
          }}
        />
        <SelectionButton
          text={I18n.t('card')}
          isSelected={documentType !== '' ? cardSelected : false}
          onPress={() => {
            setPasssportSelected(false);
            setCardSelected(true);
            setDocumentType('identity_card');
          }}
        />
      </View>
      <Text style={formSection2Styles.title}>
        {passportSelected ? I18n.t('addPassportInfo') : I18n.t('addICInfo')}
      </Text>
      <InputField
        placeholder={I18n.t('seria')}
        value={documentSeries}
        onChangeText={setDocumentSeries}
        returnKeyType={'next'}
        onSubmitEditing={() => {
          numberRef.current.focus();
        }}
        blurOnSubmit={false}
      />
      <InputField
        inputRef={numberRef}
        placeholder={I18n.t('passportNumber')}
        value={documentNumber}
        onChangeText={setDocumentNumber}
        customContainerStyle={formSection2Styles.inputContainer}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const {
    documentSeries,
    documentNumber,
    documentType,
  } = state.register.rergisterReducer;
  return {documentSeries, documentNumber};
};

const mapDispatchToProps = dispatch => ({
  setDocumentType: documentType =>
    dispatch({type: SET_DOCUMENT_TYPE, documentType}),
  setDocumentSeries: documentSeries =>
    dispatch({type: SET_DOCUMENT_SERIES, documentSeries}),
  setDocumentNumber: documentNumber =>
    dispatch({type: SET_DOCUMENT_NUMBER, documentNumber}),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSection2);
