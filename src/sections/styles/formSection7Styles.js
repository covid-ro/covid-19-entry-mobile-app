import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const formSection7Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.size35,
    marginBottom: metrics.size30,
  },
  textContainer: {
    marginHorizontal: metrics.size16,
    marginBottom: metrics.size30,
  },
});

export default formSection7Styles;
