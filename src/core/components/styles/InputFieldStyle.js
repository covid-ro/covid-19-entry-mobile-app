import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../themes/index';

export default StyleSheet.create({
  container: {
    height: metrics.size70,
    paddingLeft: metrics.size16,
    paddingRight: metrics.size16,
  },

  inputStyle: {
    borderBottomWidth: metrics.size2,
    borderColor: colors.darkBlue,
    paddingBottom: metrics.size8,
    height: metrics.size40,
    color: colors.black,
  },

  labelStyle: {
    paddingBottom: metrics.size10,
    color: colors.darkBlue,
  },
  unselectedInputStyle: {
    borderBottomWidth: metrics.size1,
    borderColor: colors.lightGrey,
    paddingBottom: metrics.size8,
    height: metrics.size40,
    color: colors.black,
  },
  unselectedLabelStyle: {
    paddingBottom: metrics.size10,
    color: 'transparent',
  },
});
