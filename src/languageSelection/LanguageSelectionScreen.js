import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {GeneralButton} from '../core/components';
import {images} from '../themes';
import {languageSelectionScreenStyles} from './styles';
import strings from '../core/strings/ro';
import {roots} from '../navigation';
import {I18n} from '../core/strings';
import {SET_REDIRECTED} from '../register/redux/actionTypes';

const LanguageSelectionScreen = ({
  navigation,
  declarationCodes,
  setRedirected,
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
          {strings.languageSelectTitle}
        </Text>
        <Text style={languageSelectionScreenStyles.subTitleStyle}>
          {strings.languageSelectSubtitle}
        </Text>
        <View style={languageSelectionScreenStyles.buttonContainer}>
          <GeneralButton
            text={strings.romana}
            onPress={() => {
              I18n.locale = 'ro';
              navigation.navigate(roots.informationScreen);
            }}
          />
        </View>
        <View style={languageSelectionScreenStyles.buttonContainer}>
          <GeneralButton
            text={strings.engleza}
            onPress={() => {
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
  const {declarationCodes} = state.register.rergisterReducer;
  return {declarationCodes};
};
const mapDispatchToProps = dispatch => ({
  setRedirected: redirected => dispatch({type: SET_REDIRECTED, redirected}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageSelectionScreen);
