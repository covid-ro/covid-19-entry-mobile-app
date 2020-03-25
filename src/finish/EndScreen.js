import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {images} from '../themes';
import {endScreenStyles} from './styles';
import {GeneralButton} from '../core/components';
import {strings} from '../core/strings';

const EndScreen = () => {
  return (
    <ScrollView style={endScreenStyles.container}>
      <Image source={images.logo} style={endScreenStyles.logo} />
      <View style={endScreenStyles.card}>
        <Text style={endScreenStyles.textStyle}>
          {strings.endScreenFirstLine}
        </Text>
        <Text style={endScreenStyles.textStyle}>
          {strings.endScreenSecondLine}
        </Text>
        <Text style={endScreenStyles.textStyle}>
          {strings.endScreenThirdLine}
        </Text>
      </View>
      <View style={endScreenStyles.bottomContainer}>
        <GeneralButton
          text={strings.sfaturiDeCalatorie}
          onPress={() => console.log('sfaturi')}
        />
      </View>
    </ScrollView>
  );
};

export default EndScreen;
