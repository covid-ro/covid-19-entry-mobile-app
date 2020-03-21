import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../themes/index';

export default StyleSheet.create({
  container: {
    height: metrics.size70,
    paddingLeft: metrics.size16,
    paddingRight: metrics.size16,
  },

  inputStyle: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    paddingBottom: metrics.size8,
  },

  labelStyle: {
    paddingBottom: metrics.size10,
    color: colors.blue,
  },
  unselectedLabelStyle: {
    paddingBottom: metrics.size10,
    color: colors.white,
  },
});
