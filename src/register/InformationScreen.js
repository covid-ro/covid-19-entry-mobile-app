import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {GeneralButton} from '../core/components';
import {informationScreenStyles} from './styles';
import {images} from '../themes';
import {labelStyles} from '../core/styles';
import {roots} from '../navigation';
import {I18n} from '../core/strings';

const InformationScreen = ({navigation, language}) => {
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
            {I18n.t('infoLabelBegin', {locale: language})}
            <Text
              style={[labelStyles.textStyle, informationScreenStyles.boldText]}>
              {I18n.t('infoLabelBold', {locale: language})}
            </Text>
            {I18n.t('infoLabelEnd', {locale: language})}
          </Text>
        </View>
      </View>
      <View style={informationScreenStyles.bottomContainer}>
        <GeneralButton
          text={I18n.t('completeDeclaration', {locale: language})}
          onPress={() => navigation.navigate(roots.sendNumber)}
        />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  const {language} = state.register.rergisterReducer;
  return {language};
};

export default connect(mapStateToProps)(InformationScreen);
