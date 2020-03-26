import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../themes';
import normalize from 'react-native-normalize';

const selectionButtonStyles = StyleSheet.create({
  normalButtonStyle: {
    backgroundColor: colors.white,
    width: normalize(metrics.size111, 'width'),
    height: normalize(metrics.size92, 'height'),
    borderRadius: metrics.size9,
    borderWidth: metrics.size1,
    borderColor: colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedStyle: {
    backgroundColor: colors.lightBlue,
    width: normalize(metrics.size111, 'width'),
    height: normalize(metrics.size92, 'height'),
    borderRadius: metrics.size9,
    borderWidth: metrics.size2,
    borderColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedTextStyle: {
    fontSize: metrics.size15,
    color: colors.darkBlue,
    fontWeight: '500',
    textAlign: 'center',
  },

  normalTextStyle: {
    fontSize: metrics.size15,
    color: colors.lightGrey,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default selectionButtonStyles;
