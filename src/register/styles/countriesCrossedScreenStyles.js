import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const countriesCrossedScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayBackground,
  },
  description: {
    marginTop: metrics.size22,
    color: colors.gray,
    marginHorizontal: metrics.size16,
    fontSize: metrics.size17,
  },
});

export default countriesCrossedScreenStyles;
