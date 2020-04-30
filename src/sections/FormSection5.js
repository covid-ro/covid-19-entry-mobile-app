import React, {useState, useRef} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {InputField} from '../core/components';
import {formSection5Styles} from './styles';
import {I18n} from '../core/strings';
import {images} from '../themes';
import {labelStyles} from '../core/styles';
import {SET_EMAIL, SET_PHONE_NUMBER} from '../register/redux/actionTypes';
import {connect} from 'react-redux';

const FormSection5 = ({email, phoneNumber, setEmail, language}) => {
  const [locationValue, setLocationValue] = useState(undefined);
  const emailRef = useRef(null);
  return (
    <View style={formSection5Styles.container}>
      <Text style={[labelStyles.textStyle, formSection5Styles.topTextStyle]}>
        {I18n.t('form5Label', {locale: language})}
      </Text>
      <View>
        <InputField
          placeholder={I18n.t('telefonValid', {locale: language})}
          onChangeText={setLocationValue}
          value={phoneNumber}
          editable={false}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            emailRef.current.focus();
          }}
          blurOnSubmit={false}
        />
        <Image source={images.ic_tick} style={formSection5Styles.imageStyle} />
      </View>
      <InputField
        inputRef={emailRef}
        placeholder={I18n.t('email', {locale: language})}
        value={email}
        onChangeText={setEmail}
        autoCapitalize={'none'}
      />
      <Text style={formSection5Styles.alertLabelStyle}>
        {I18n.t('alertLabel', {locale: language})}
      </Text>
      <Text
        style={[labelStyles.textStyle, formSection5Styles.alertMessageStyle]}>
        {I18n.t('alertMessage', {locale: language})}
      </Text>
    </View>
  );
};

const mapStateToProps = state => {
  const {email, phoneNumber, language} = state.register.rergisterReducer;
  return {email, phoneNumber, language};
};

const mapDispatchToProps = dispatch => ({
  setEmail: email => dispatch({type: SET_EMAIL, email}),
  setPhoneNumber: phone => dispatch({type: SET_PHONE_NUMBER, phone}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormSection5);
