import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import normalize from 'react-native-normalize';

const countriesCrossedScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  description: {
    marginTop: normalize(metrics.size30),
    color: colors.gray,
    marginHorizontal: metrics.size16,
    fontSize: metrics.size17,
    marginBottom: normalize(metrics.size25),
  },
});

export default countriesCrossedScreenStyles;
