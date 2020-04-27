import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {ProgressHeader} from '../register/components';
import {finishScreenStyles} from './styles';
import {GeneralButton} from '../core/components';
import {I18n} from '../core/strings';
import {roots} from '../navigation';

const FinishScreen = ({language}) => {
  const navigation = useNavigation();
  return (
    <View style={finishScreenStyles.container}>
      <ProgressHeader step={10} />
      <ScrollView
        style={finishScreenStyles.container}
        contentContainerStyle={finishScreenStyles.contentContainer}>
        <View style={finishScreenStyles.card}>
          <Text style={finishScreenStyles.title}>
            {I18n.t('finishScreenFirstLine', {locale: language})}
          </Text>
          <Text style={finishScreenStyles.textStyle}>
            {I18n.t('finishScreenSecondLine', {locale: language})}
          </Text>
          <Text style={finishScreenStyles.textStyle}>
            {I18n.t('finisScreenThirdLine', {locale: language})}
          </Text>
        </View>

        <View style={finishScreenStyles.bottomContainer}>
          <GeneralButton
            onPress={() => {
              navigation.navigate(roots.registerStack);
            }}
            text={I18n.t('adaugaMembru', {locale: language})}
          />
          <View style={finishScreenStyles.marginTop}>
            <GeneralButton
              onPress={() => navigation.navigate(roots.endScreen)}
              text={I18n.t('nuMaiAdaug', {locale: language})}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => {
  const {language} = state.register.rergisterReducer;
  return {language};
};

export default connect(mapStateToProps)(FinishScreen);
