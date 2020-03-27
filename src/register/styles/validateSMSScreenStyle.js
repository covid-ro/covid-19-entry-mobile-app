import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  addCodeLabelStyle: {
    marginHorizontal: metrics.size16,
    marginTop: normalize(metrics.size22),
    lineHeight: metrics.size24,
    fontSize: metrics.size17,
    color: colors.gray,
    fontWeight: '500',
  },
  buttonStyle: {marginTop: normalize(metrics.size30)},
  inputFieldStyle: {
    marginTop: normalize(metrics.size35),
  },
  progressBarContainer: {
    paddingHorizontal: metrics.size16,
    backgroundColor: colors.white,
  },
  saveButtonStyle: {
    marginTop: metrics.size30,
  },
  questionLabelStyle: {
    marginTop: normalize(metrics.size40),
    marginHorizontal: metrics.size16,
    textAlign: 'center',
    fontSize: metrics.size15,
    color: colors.gray,
  },
  resendSMSButtonStyle: {
    marginTop: metrics.size5,
  },
  resendSMSTextStyle: {
    textAlign: 'center',
    color: colors.darkBlue,
    fontWeight: '500',
    fontSize: metrics.size15,
  },
});
