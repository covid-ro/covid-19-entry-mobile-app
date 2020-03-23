import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {Item, Picker, DatePicker, Icon} from 'native-base';
import {InputField} from '../core/components';
import {countries} from '../core/utils';
import {formSection3Styles, fromSection3Styles} from './styles';
import {strings} from '../core/strings';

const FormSection3 = () => {
  const [country, setCountryValue] = useState(undefined);
  const [county, setCountyValue] = useState(null);
  const [date, setDateValue] = useState(null);

  const onCountyValueChange = useCallback(value => {
    setCountyValue(value);
  }, []);

  const onDateValueChange = useCallback(value => {
    setDateValue(value);
  }, []);
  console.log(country);
  return (
    <View style={formSection3Styles.container}>
      <Text style={formSection3Styles.title}>{strings.form3Label}</Text>

      <Item picker style={fromSection3Styles.pickerDivider}>
        <Picker
          mode="dropdown"
          style={formSection3Styles.picker}
          onValueChange={setCountryValue}
          selectedValue={country}
          textStyle={formSection3Styles.pickerText}
          placeholder={strings.country}
          placeholderStyle={formSection3Styles.pickerPlaceHolder}
          iosIcon={
            <Icon name="arrow-down" style={formSection3Styles.pickerIcon} />
          }>
          {countries.map(item => (
            <Picker.Item label={item.name} value={item.name} />
          ))}
        </Picker>
      </Item>

      <InputField
        placeholder={strings.county}
        value={county}
        onChangeText={setCountyValue}
        borderColor={formSection3Styles.textInputBorder}
        placeholderColor={formSection3Styles.textInputPlaceholder}
      />
    </View>
  );
};
export default FormSection3;
