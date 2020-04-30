import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {images} from '../themes';
import {endScreenStyles} from './styles';
import {GeneralButton} from '../core/components';
import {I18n} from '../core/strings';
import {roots} from '../navigation';
import {SET_REDIRECTED} from '../register/redux/actionTypes';

const EndScreen = ({setRedirected, language}) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={endScreenStyles.container}>
      <Image source={images.logo} style={endScreenStyles.logo} />
      <View style={endScreenStyles.card}>
        <Text style={endScreenStyles.textStyle}>
          {I18n.t('endScreenFirstLine', {locale: language})}
        </Text>
        <Text style={endScreenStyles.textStyle}>
          {I18n.t('endScreenSecondLine', {locale: language})}
        </Text>
        <Text style={endScreenStyles.textStyle}>
          {I18n.t('endScreenThirdLine', {locale: language})}
        </Text>
      </View>
      <View style={endScreenStyles.bottomContainer}>
        <GeneralButton
          text={I18n.t('seeQR', {locale: language})}
          onPress={() => {
            setRedirected(false);
            navigation.navigate(roots.codesScreen);
          }}
        />
      </View>
    </ScrollView>
  );
};
const mapStateToProps = state => {
  const {language} = state.register.rergisterReducer;
  return {language};
};
const mapDispatchToProps = dispatch => ({
  setRedirected: redirected => dispatch({type: SET_REDIRECTED, redirected}),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EndScreen);
