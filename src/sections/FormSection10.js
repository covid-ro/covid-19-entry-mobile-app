import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {InputField} from '../core/components';
import {formSection10Styles} from './styles';
import {I18n} from '../core/strings';
import {labelStyles} from '../core/styles';
import {SET_CITIES_ROUTE} from '../register/redux/actionTypes';

const FormSection10 = ({citiesRoute, setCitiesRoute, language}) => {
  return (
    <View>
      <Text style={[labelStyles.textStyle, formSection10Styles.textContainer]}>
        {I18n.t('form10Label', {locale: language})}
      </Text>
      <InputField
        placeholder={I18n.t('form10Placeholder', {locale: language})}
        value={citiesRoute}
        onChangeText={setCitiesRoute}
        customContainerStyle={formSection10Styles.inputCustomContainer}
        customInputStyle={formSection10Styles.customInput}
        multiline={true}
        customLabelStyle={formSection10Styles.customLabel}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const {citiesRoute, language} = state.register.rergisterReducer;
  return {citiesRoute, language};
};

const mapDispatchToProps = dispatch => ({
  setCitiesRoute: citiesRoute =>
    dispatch({type: SET_CITIES_ROUTE, citiesRoute}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormSection10);
