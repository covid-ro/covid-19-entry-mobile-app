import React, {useState, useRef} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {InputField} from '../core/components';
import {formSection5Styles} from './styles';
import {strings} from '../core/strings';
import {images} from '../themes';
import {labelStyles} from '../core/styles';
import {SET_EMAIL, SET_PHONE_NUMBER} from '../register/redux/actionTypes';
import {connect} from 'react-redux';

const FormSection5 = ({email, phoneNumber, setEmail, setPhoneNumber}) => {
  const [locationValue, setLocationValue] = useState(undefined);
  const emailRef = useRef(null);

  return (
    <View style={formSection5Styles.container}>
      <Text style={[labelStyles.textStyle, formSection5Styles.topTextStyle]}>
        {strings.form5Label}
      </Text>
      <View>
        <InputField
          placeholder={strings.telefonValid}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
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
        placeholder={strings.email}
        value={email}
        onChangeText={setEmail}
        autoCapitalize={'none'}
      />
      <Text style={formSection5Styles.alertLabelStyle}>
        {strings.alertLabel}
      </Text>
      <Text
        style={[labelStyles.textStyle, formSection5Styles.alertMessageStyle]}>
        {strings.alertMessage}
      </Text>
    </View>
  );
};

const mapStateToProps = state => {
  const {email, phoneNumber} = state.register.rergisterReducer;
  return {email, phoneNumber};
};

const mapDispatchToProps = dispatch => ({
  setEmail: email => dispatch({type: SET_EMAIL, email}),
  setPhoneNumber: phone => dispatch({type: SET_PHONE_NUMBER, phone}),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSection5);
