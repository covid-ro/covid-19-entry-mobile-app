import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const formSection8Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.size35,
    marginBottom: metrics.size26,
  },
  textContainer: {
    marginHorizontal: metrics.size16,
    marginBottom: metrics.size36,
  },
});

export default formSection8Styles;
