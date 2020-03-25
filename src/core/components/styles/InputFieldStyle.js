import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../themes/index';

export default StyleSheet.create({
  container: {
    marginHorizontal: metrics.size16,
    marginTop: metrics.size32,
  },
  inputStyle: {
    color: colors.darkGrey,
    height: metrics.size18,
    fontSize: metrics.size15,
    fontWeight: 'normal',
    padding: metrics.size0,
  },
  labelStyle: {
    color: colors.darkBlue,
    height: metrics.size15,
    marginBottom: metrics.size10,
    fontSize: metrics.size13,
    fontWeight: '500',
    lineHeight: metrics.size15,
  },
  unselectedLabelStyle: {
    color: 'transparent',
  },
  separator: {
    marginTop: metrics.size8,
    borderBottomWidth: metrics.size1,
    borderBottomColor: colors.greyE7,
  },
  focusedSeparator: {
    marginTop: metrics.size8,
    borderBottomWidth: metrics.size2,
    borderColor: colors.darkBlue,
  },
});
