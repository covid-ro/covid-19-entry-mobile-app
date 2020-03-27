import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView} from 'react-native';
import {InputField} from '../core/components';
import {formSection10Styles} from './styles';
import {strings} from '../core/strings';
import {labelStyles} from '../core/styles';
import {SET_CITIES_ROUTE} from '../register/redux/actionTypes';

const FormSection10 = ({citiesRoute, setCitiesRoute}) => {
  const [location, setLocation] = useState('');
  return (
    <ScrollView>
      <Text style={[labelStyles.textStyle, formSection10Styles.textContainer]}>
        {strings.form10Label}
      </Text>
      <InputField
        placeholder={strings.form10Placeholder}
        value={citiesRoute}
        onChangeText={setCitiesRoute}
        customContainerStyle={formSection10Styles.inputCustomContainer}
        customInputStyle={formSection10Styles.customInput}
        multiline={true}
        customLabelStyle={formSection10Styles.customLabel}
      />
    </ScrollView>
  );
};

const mapStateToProps = state => {
  const {citiesRoute} = state.register.rergisterReducer;
  return {citiesRoute};
};

const mapDispatchToProps = dispatch => ({
  setCitiesRoute: citiesRoute =>
    dispatch({type: SET_CITIES_ROUTE, citiesRoute}),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSection10);
