import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {GeneralButton} from '../core/components';
import {informationScreenStyles} from './styles';
import {images} from '../themes';
import {labelStyles} from '../core/styles';
import {roots} from '../navigation';
import {I18n} from '../core/strings';
import {BackButton} from '../core/components/';

const InformationScreen = ({navigation}) => {
  return (
    <ScrollView style={informationScreenStyles.container}>
      <Image source={images.logo} style={informationScreenStyles.logo} />
      <View style={informationScreenStyles.content}>
        <View style={informationScreenStyles.card}>
          <Text
            style={[
              informationScreenStyles.informationLabelStyle,
              labelStyles.textStyle,
            ]}>
            {I18n.t('infoLabelBegin')}
            <Text
              style={[labelStyles.textStyle, informationScreenStyles.boldText]}>
              {I18n.t('infoLabelBold')}
            </Text>
            {I18n.t('infoLabelEnd')}
          </Text>
        </View>
      </View>
      <View style={informationScreenStyles.bottomContainer}>
        <GeneralButton
          text={I18n.t('completeDeclaration')}
          onPress={() => navigation.navigate(roots.sendNumber)}
        />
      </View>
    </ScrollView>
  );
};

export default InformationScreen;
