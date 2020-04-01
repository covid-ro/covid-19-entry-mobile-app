import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {images} from '../themes';
import {endScreenStyles} from './styles';
import {GeneralButton} from '../core/components';
import {I18n} from '../core/strings';

const EndScreen = () => {
  return (
    <ScrollView style={endScreenStyles.container}>
      <Image source={images.logo} style={endScreenStyles.logo} />
      <View style={endScreenStyles.card}>
        <Text style={endScreenStyles.textStyle}>
          {I18n.t('endScreenFirstLine')}
        </Text>
        <Text style={endScreenStyles.textStyle}>
          {I18n.t('endScreenSecondLine')}
        </Text>
        <Text style={endScreenStyles.textStyle}>
          {I18n.t('endScreenThirdLine')}
        </Text>
      </View>
      <View style={endScreenStyles.bottomContainer}>
        <GeneralButton
          text={I18n.t('sfaturiDeCalatorie')}
          onPress={() => console.log('sfaturi')}
        />
      </View>
    </ScrollView>
  );
};

export default EndScreen;
