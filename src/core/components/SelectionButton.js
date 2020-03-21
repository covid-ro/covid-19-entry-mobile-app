import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {selectionButtonStyles} from './styles';

const CustomButton = ({text, onPress, isSelected}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        isSelected
          ? selectionButtonStyles.selectedStyle
          : selectionButtonStyles.normalButtonStyle
      }>
      <Text
        style={
          isSelected
            ? selectionButtonStyles.selectedTextStyle
            : selectionButtonStyles.normalTextStyle
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
