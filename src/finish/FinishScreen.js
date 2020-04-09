import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ProgressHeader} from '../register/components';
import {finishScreenStyles} from './styles';
import {GeneralButton} from '../core/components';
import {I18n} from '../core/strings';
import {roots} from '../navigation';
import {connect} from 'react-redux';

const FinishScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={finishScreenStyles.container}>
      <ProgressHeader step={10} />
      <ScrollView
        style={finishScreenStyles.container}
        contentContainerStyle={finishScreenStyles.contentContainer}>
        <View style={finishScreenStyles.card}>
          <Text style={finishScreenStyles.title}>
            {I18n.t('finishScreenFirstLine')}
          </Text>
          <Text style={finishScreenStyles.textStyle}>
            {I18n.t('finishScreenSecondLine')}
          </Text>
          <Text style={finishScreenStyles.textStyle}>
            {I18n.t('finisScreenThirdLine')}
          </Text>
        </View>

        <View style={finishScreenStyles.bottomContainer}>
          <GeneralButton
            onPress={() => navigation.navigate(roots.registerStack)}
            text={I18n.t('adaugaMembru')}
          />
          <View style={finishScreenStyles.marginTop}>
            <GeneralButton
              onPress={() => navigation.navigate(roots.endScreen)}
              text={I18n.t('nuMaiAdaug')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  const {declarationCodes} = state.register.rergisterReducer;
  return {declarationCodes};
};

export default connect(mapStateToProps)(FinishScreen);
