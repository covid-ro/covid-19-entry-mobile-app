import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../themes/index';

export default StyleSheet.create({
  container: {
    marginHorizontal: metrics.size16,
  },

  inputStyle: {
    color: colors.darkGrey,
    height: metrics.size18,
    fontSize: metrics.size15,
    fontWeight: 'normal',
    paddingVertical: metrics.size0,
  },

  labelStyle: {
    color: colors.darkBlue,
    marginBottom: metrics.size10,
    fontSize: metrics.size13,
    fontWeight: '500',
    lineHeight: metrics.size15,
  },
  unselectedLabelStyle: {
    color: 'transparent',
  },
  separator: {
    marginTop: metrics.size4,
    borderBottomWidth: metrics.size1,
    borderBottomColor: colors.greyE7,
  },

  focusedSeparator: {
    borderBottomWidth: metrics.size2,
    borderColor: colors.darkBlue,
    paddingBottom: metrics.size5,
  },
});
