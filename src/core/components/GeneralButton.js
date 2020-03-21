import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {generalButtonStyles} from './styles';

const GeneralButton = ({text, onPress, isSelected}) => {
  return (
    <TouchableOpacity onPress={onPress} style={generalButtonStyles.buttonStyle}>
      <Text style={generalButtonStyles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default GeneralButton;
