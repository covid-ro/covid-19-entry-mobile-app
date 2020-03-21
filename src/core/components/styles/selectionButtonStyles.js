import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../themes';

const selectionButtonStyles = StyleSheet.create({
  normalButtonStyle: {
    backgroundColor: colors.white,
    width: metrics.size111,
    height: metrics.size92,
    borderRadius: metrics.size9,
    borderWidth: metrics.size1,
    borderColor: colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedStyle: {
    backgroundColor: colors.lightBlue,
    width: metrics.size111,
    height: metrics.size92,
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
