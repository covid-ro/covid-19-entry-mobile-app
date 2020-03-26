import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {formSection9Styles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton, InputField} from '../core/components';
import {strings} from '../core/strings';

const FormSection8 = ({text}) => {
  const [option1Selected, setOption1Selected] = useState(false);
  const [option2Selected, setOption2Selected] = useState(false);
  const [autoNumber, setAutoNumber] = useState(false);
  const [recompleteForm, setRecompleteForm] = useState(false);

  return (
    <View style={formSection9Styles.container}>
      <View style={formSection9Styles.textContainer}>
        <Text style={labelStyles.textStyle}>{strings.form9Label}</Text>
      </View>
      <View style={formSection9Styles.buttonsContainer}>
        <SelectionButton
          text={strings.auto}
          isSelected={option1Selected}
          onPress={() => {
            setOption1Selected(true);
            setOption2Selected(false);
          }}
        />
        <SelectionButton
          text={strings.ambulance}
          isSelected={option2Selected}
          onPress={() => {
            setOption1Selected(false);
            setOption2Selected(true);
          }}
        />
      </View>
      <View style={formSection9Styles.vehicleTextContainer}>
        <Text style={labelStyles.textStyle}>{strings.form9Label2}</Text>
      </View>
      <InputField
        placeholder={strings.placeholderAutomobil}
        customContainerStyle={formSection9Styles.vehicleInputContainer}
        value={autoNumber}
        onChangeText={setAutoNumber}
      />
      {recompleteForm && (
        <View style={formSection9Styles.recompleteTextContainer}>
          <Text style={formSection9Styles.grayText}>
            {strings.aceleasiDateAnterioare}
          </Text>
          <TouchableOpacity>
            <Text style={formSection9Styles.blueText}>
              {strings.folosesteDateAnterioare}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FormSection8;
