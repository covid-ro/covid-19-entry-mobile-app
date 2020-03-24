import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {backButtonStyles} from './styles';

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={backButtonStyles.marginLeft}
      onPress={() => navigation.goBack()}>
      <Icon
        ios="ios-arrow-back"
        android="md-arrow-back"
        type="Ionicons"
        style={backButtonStyles.iconColor}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
