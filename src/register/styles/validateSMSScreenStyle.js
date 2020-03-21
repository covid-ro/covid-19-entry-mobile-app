import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export default StyleSheet.create({
  addCodeLabelStyle: {
    marginHorizontal: metrics.size16,
    marginTop: metrics.size22,
    lineHeight: metrics.size24,
  },
  buttonStyle: {marginTop: metrics.size30},
  inputFieldStyle: {
    marginTop: metrics.size35,
  },
  progressBarContainer: {
    paddingHorizontal: metrics.size16,
    backgroundColor:colors.white
  },
  saveButtonStyle: {
    marginTop: metrics.size30,
  },
  questionLabelStyle: {
    marginTop: metrics.size40,
    marginHorizontal: metrics.size16,
    textAlign: 'center',
  },
  resendSMSButtonStyle: {
    marginTop: metrics.size5,
  },
  resendSMSTextStyle: {
    textAlign: 'center',
    color: colors.darkBlue,
  },
});
