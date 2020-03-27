import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import normalize from 'react-native-normalize';

const formSection7Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: normalize(metrics.size35),
    marginBottom: normalize(metrics.size30),
  },
  textContainer: {
    marginHorizontal: metrics.size16,
    marginBottom: normalize(metrics.size21),
  },
});

export default formSection7Styles;
