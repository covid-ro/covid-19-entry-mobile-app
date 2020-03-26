import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {formSection2Styles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton, InputField} from '../core/components';
import {strings} from '../core/strings';
import {connect} from 'react-redux';
import {
  SET_DOCUMENT_TYPE,
  SET_DOCUMENT_NUMBER,
  SET_DOCUMENT_SERIES,
} from '../register/redux/actionTypes';

const FormSection2 = ({
  documentNumber,
  documentSeries,
  setDocumentType,
  setDocumentNumber,
  setDocumentSeries,
}) => {
  const [passportSelected, setPasssportSelected] = useState(false);
  const [cardSelected, setCardSelected] = useState(false);

  return (
    <ScrollView style={formSection2Styles.container}>
      <View style={formSection2Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{strings.form2Label}</Text>
      </View>
      <View style={formSection2Styles.buttonsContainer}>
        <SelectionButton
          text={strings.passport}
          isSelected={passportSelected}
          onPress={() => {
            setPasssportSelected(true);
            setCardSelected(false);
            setDocumentType('pssport');
          }}
        />
        <SelectionButton
          text={strings.card}
          isSelected={cardSelected}
          onPress={() => {
            setPasssportSelected(false);
            setCardSelected(true);
            setDocumentType('identity_card');
          }}
        />
      </View>
      <Text style={formSection2Styles.title}>
        {passportSelected ? strings.addPassportInfo : strings.addICInfo}
      </Text>
      <InputField
        placeholder={strings.seria}
        value={documentSeries}
        onChangeText={setDocumentSeries}
      />
      <InputField
        placeholder={strings.passportNumber}
        value={documentNumber}
        onChangeText={setDocumentNumber}
        customContainerStyle={formSection2Styles.inputContainer}
      />
    </ScrollView>
  );
};

const mapStateToProps = state => {
  const {documentSeries, documentNumber} = state.register.rergisterReducer;
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
