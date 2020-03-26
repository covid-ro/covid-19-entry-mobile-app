import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ProgressHeader} from '../register/components';
import {finishScreenStyles} from './styles';
import {GeneralButton} from '../core/components';
import {strings} from '../core/strings';
import {roots} from '../navigation';
import {connect} from 'react-redux';

const FinishScreen = ({navigation, firstName, surname}) => {
  return (
    <ScrollView style={finishScreenStyles.container}>
      <ProgressHeader step={10} />
      <View style={finishScreenStyles.card}>
        <Text style={finishScreenStyles.title}>
          {strings.finishScreenFirstLine}
        </Text>
        <Text style={finishScreenStyles.textStyle}>
          {strings.finishScreenSecondLine}
        </Text>
        <Text style={finishScreenStyles.textStyle}>
          {strings.finisScreenThirdLine}
        </Text>
      </View>
      <View style={finishScreenStyles.bottomContainer}>
        <GeneralButton
          onPress={() => navigation.navigate(roots.registerStack)}
          text={strings.adaugaMembru}
        />
        <View style={finishScreenStyles.marginTop}>
          <GeneralButton
            onPress={() => navigation.navigate(roots.endScreen)}
            text={strings.nuMaiAdaug}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  const {firstName, surname} = state.register.rergisterReducer;
  return {firstName, surname};
};

export default connect(mapStateToProps)(FinishScreen);
