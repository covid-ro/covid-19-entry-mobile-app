import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles/validateSMSScreenStyle';
import {InputField, GeneralButton} from '../core/components';
import {strings} from '../core/strings';
import {TimerHeader} from '../register/components';
import {TouchableOpacity} from 'react-native';
import {roots} from '../navigation';

const ValidateSMSScreen = ({navigation}) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < 30) {
      setTimeout(() => setStep(step + 1), 1000);
    }
  }, [step, setStep]);

  return (
    <View>
      <TimerHeader step={step} />
      <Text style={styles.addCodeLabelStyle}>{strings.addSMSCode}</Text>
      <View style={styles.inputFieldStyle}>
        <InputField
          placeholder={strings.codValidareSMS}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.saveButtonStyle}>
        <GeneralButton
          text={strings.save}
          onPress={() => navigation.navigate(roots.registerStack)}
        />
      </View>
      <Text style={styles.questionLabelStyle}>
        {strings.dontReceiveTheCode}
      </Text>
      <TouchableOpacity style={styles.resendSMSButtonStyle}>
        <Text style={styles.resendSMSTextStyle}>{strings.resendSMSCod}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ValidateSMSScreen;
