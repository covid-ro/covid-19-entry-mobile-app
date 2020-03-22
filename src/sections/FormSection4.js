import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {Item, Picker, DatePicker, Icon} from 'native-base';
import {InputField} from '../core/components';
import {countries} from '../core/utils';
import {formSection4Styles} from './styles';
import {strings} from '../core/strings';

const FormSection4 = () => {
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
    <View style={formSection4Styles.container}>
      <Text style={formSection4Styles.title}>{strings.form4Label}</Text>

      <Item picker style={formSection4Styles.pickerDivider}>
        <Picker
          mode="dropdown"
          style={formSection4Styles.picker}
          onValueChange={setCountryValue}
          selectedValue={country}
          textStyle={formSection4Styles.pickerText}
          placeholder={strings.country}
          placeholderStyle={formSection4Styles.pickerPlaceHolder}
          iosIcon={
            <Icon name="arrow-down" style={formSection4Styles.pickerIcon} />
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
        borderColor={formSection4Styles.textInputBorder}
        placeholderColor={formSection4Styles.textInputPlaceholder}
      />
    </View>
  );
};

export default FormSection4;
