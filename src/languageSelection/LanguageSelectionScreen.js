import React from 'react';
import {View, Text, Image} from 'react-native';
import {GeneralButton} from '../core/components';
import {images} from '../themes';
import {languageSelectionScreenStyles} from './styles';
import strings from '../core/strings/strings';
import {roots} from '../navigation';

const LanguageSelectionScreen = ({navigation}) => {
  return (
    <View style={languageSelectionScreenStyles.container}>
      <Image source={images.logo} style={languageSelectionScreenStyles.logo} />
      <View style={languageSelectionScreenStyles.bottomContainer}>
        <Text style={languageSelectionScreenStyles.titleStyle}>
          {strings.languageSelectTitle}
        </Text>
        <Text style={languageSelectionScreenStyles.subTitleStyle}>
          {strings.languageSelectSubtitle}
        </Text>
        <View style={languageSelectionScreenStyles.buttonContainer}>
          <GeneralButton
            text={strings.romana}
            onPress={() => navigation.navigate(roots.infoScreen)}
          />
        </View>
        <View style={languageSelectionScreenStyles.buttonContainer}>
          <GeneralButton
            text={strings.engleza}
            onPress={() => navigation.navigate(roots.infoScreen)}
          />
        </View>
      </View>
    </View>
  );
};

export default LanguageSelectionScreen;
