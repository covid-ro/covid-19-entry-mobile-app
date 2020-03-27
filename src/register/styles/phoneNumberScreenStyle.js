import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  buttonStyle: {marginTop: normalize(metrics.size30)},
  informationLabelStyle: {
    marginStart: metrics.size15,
    marginEnd: metrics.size15,
    marginTop: normalize(metrics.size32),
    lineHeight: metrics.size25,
    fontSize: metrics.size17,
    color: colors.gray,
    fontWeight: '500',
  },
  phoneLabel: {
    marginTop: normalize(metrics.size43),
    color: colors.darkBlue,
  },
});
