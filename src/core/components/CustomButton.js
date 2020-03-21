import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {customButtonStyles} from './styles';

const CustomButton = ({text, onPress, isSelected}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        isSelected
          ? customButtonStyles.selectedStyle
          : customButtonStyles.buttonStyle
      }>
      <Text
        style={
          isSelected
            ? customButtonStyles.selectedTextStyle
            : customButtonStyles.normalTextStyle
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
