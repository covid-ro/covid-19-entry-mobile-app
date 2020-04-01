import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {InputField} from '../core/components';
import {formSection10Styles} from './styles';
import {I18n} from '../core/strings';
import {labelStyles} from '../core/styles';

const FormSection10 = () => {
  const [location, setLocation] = useState('');
  return (
    <View>
      <Text style={[labelStyles.textStyle, formSection10Styles.textContainer]}>
        {I18n.t('form10Label')}
      </Text>
      <InputField
        placeholder={I18n.t('form10Placeholder')}
        value={location}
        onChangeText={setLocation}
        customContainerStyle={formSection10Styles.inputCustomContainer}
        customInputStyle={formSection10Styles.customInput}
        multiline={true}
        customLabelStyle={formSection10Styles.customLabel}
      />
    </View>
  );
};

export default FormSection10;
