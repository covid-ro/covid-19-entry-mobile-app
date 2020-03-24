import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export default StyleSheet.create({
  buttonStyle: {marginTop: metrics.size30},
  informationLabelStyle: {
    marginStart: metrics.size15,
    marginEnd: metrics.size15,
    marginTop: metrics.size32,
    lineHeight: metrics.size25,
    fontSize: metrics.size17,
    color: colors.gray,
    fontWeight: '500',
  },
  phoneLabel: {
    marginTop: metrics.size43,
    color: colors.darkBlue,
  },
});
