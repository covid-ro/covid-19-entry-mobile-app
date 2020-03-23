import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {GeneralButton} from '../core/components';
import {informationScreenStyles} from './styles';
import {strings} from '../core/strings';

import {images} from '../themes';
import {labelStyles} from '../core/styles';
const InformationScreen = () => {
  return (
    <View style={informationScreenStyles.container}>
      <Image source={images.logo} style={informationScreenStyles.logo} />
      <View style={informationScreenStyles.content}>
        <ScrollView
          style={informationScreenStyles.card}
          showsVerticalScrollIndicator={false}>
          <Text
            style={[
              informationScreenStyles.informationLabelStyle,
              labelStyles.textStyle,
            ]}>
            {strings.infoLabelBegin}
            <Text
              style={[labelStyles.textStyle, informationScreenStyles.boldText]}>
              {strings.infoLabelBold}
            </Text>
            {strings.infoLabelEnd}
          </Text>
        </ScrollView>
      </View>
      <View style={informationScreenStyles.bottomContainer}>
        <GeneralButton text={strings.completeDeclaration} />
      </View>
    </View>
  );
};

export default InformationScreen;
