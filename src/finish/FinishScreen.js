import React from 'react';
import {View, Text} from 'react-native';
import {ProgressHeader} from '../register/components';
import {finishScreenStyles} from './styles';
import {GeneralButton} from '../core/components';
import {strings} from '../core/strings';
import {roots} from '../navigation';

const FinishScreen = ({navigation}) => {
  return (
    <View style={finishScreenStyles.container}>
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
    </View>
  );
};

export default FinishScreen;
