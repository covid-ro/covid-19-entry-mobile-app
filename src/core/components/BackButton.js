import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {backButtonStyles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation';

const BackButton = ({onPress, changeOrientation}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={backButtonStyles.marginLeft}
      onPress={() => onPress || navigation.goBack()}>
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
