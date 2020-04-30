import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {GeneralButton} from '../core/components';
import {images} from '../themes';
import {languageSelectionScreenStyles} from './styles';
import {roots} from '../navigation';
import {I18n} from '../core/strings';
import {SET_REDIRECTED, SET_LANGUAGE} from '../register/redux/actionTypes';

const LanguageSelectionScreen = ({
  setLanguage,
  navigation,
  declarationCodes,
  language,
}) => {
  useEffect(() => {
    if (declarationCodes.length !== 0) {
      navigation.navigate(roots.codesScreen, {redirected: true});
    }
  });
  return (
    <View style={languageSelectionScreenStyles.container}>
      <Image source={images.logo} style={languageSelectionScreenStyles.logo} />
      <View style={languageSelectionScreenStyles.bottomContainer}>
        <Text style={languageSelectionScreenStyles.titleStyle}>
          {I18n.t('languageSelectTitle', {locale: language})}
        </Text>
        <Text style={languageSelectionScreenStyles.subTitleStyle}>
          {I18n.t('languageSelectSubtitle', {locale: language})}
        </Text>
        <View style={languageSelectionScreenStyles.buttonContainer}>
          <GeneralButton
            text={I18n.t('romana', {locale: language})}
            onPress={() => {
              setLanguage('ro');
              I18n.locale = 'ro';
              navigation.navigate(roots.informationScreen);
            }}
          />
        </View>
        <View style={languageSelectionScreenStyles.buttonContainer}>
          <GeneralButton
            text={I18n.t('engleza', {locale: language})}
            onPress={() => {
              setLanguage('en');
              I18n.locale = 'en';
              navigation.navigate(roots.informationScreen);
            }}
          />
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = state => {
  const {declarationCodes, language} = state.register.rergisterReducer;
  return {declarationCodes, language};
};
const mapDispatchToProps = dispatch => ({
  setRedirected: redirected => dispatch({type: SET_REDIRECTED, redirected}),
  setLanguage: language => dispatch({type: SET_LANGUAGE, language}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageSelectionScreen);
