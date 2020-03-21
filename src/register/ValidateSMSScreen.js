import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles/validateSMSScreenStyle';
import {InputField, GeneralButton} from '../core/components';
import {strings} from '../core/strings';
import {ProgressHeader} from '../register/components';
import {TouchableOpacity} from 'react-native-gesture-handler';
const ValidateSMSScreen = () => {
  return (
    <View>
      <View style={styles.progressBarContainer}>
        <ProgressHeader step={1} />
      </View>
      <Text style={styles.addCodeLabelStyle}>{strings.addSMSCode}</Text>
      <View style={styles.inputFieldStyle}>
        <InputField placeholder={strings.codValidareSMS} />
      </View>
      <View style={styles.saveButtonStyle}>
        <GeneralButton text={strings.save} />
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
