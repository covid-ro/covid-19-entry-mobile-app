import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {customButtonStyles} from './styles';

const CustomButton = ({text, onPress, isSelected}) => {
  return isSelected ? (
    <TouchableOpacity
      onPress={onPress}
      style={customButtonStyles.selectedStyle}>
      <Text style={customButtonStyles.selectedTextStyle}>{text}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress} style={customButtonStyles.buttonStyle}>
      <Text style={customButtonStyles.normalTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
