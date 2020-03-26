import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../themes';
import normalize from 'react-native-normalize';

const generalButtonStyles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.darkBlue,
    height: normalize(metrics.size46),
    marginHorizontal: metrics.size16,
    borderRadius: metrics.size7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: metrics.size15,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default generalButtonStyles;
