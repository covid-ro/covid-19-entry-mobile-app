import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {selectIdentityScreenStyles} from './styles';
import {labelStyles} from '../core/styles';
import {SelectionButton} from '../core/components';
import {strings} from '../core/strings';

const SelectIdentityCardScreen = () => {
  const [passportSelected, setPasssportSelected] = useState(false);
  const [cardSelected, setCardSelected] = useState(false);

  return (
    <View style={selectIdentityScreenStyles.container}>
      <View style={selectIdentityScreenStyles.textContainer}>
        <Text style={labelStyles.textStyle}>
          {strings.selectIdentityCardLabel}
        </Text>
      </View>
      <View style={selectIdentityScreenStyles.buttonsContainer}>
        <SelectionButton
          text="Pasaport"
          isSelected={passportSelected}
          onPress={() => {
            setPasssportSelected(true);
            setCardSelected(false);
          }}
        />
        <SelectionButton
          text="Card"
          isSelected={cardSelected}
          onPress={() => {
            setPasssportSelected(false);
            setCardSelected(true);
          }}
        />
      </View>
    </View>
  );
};

export default SelectIdentityCardScreen;
