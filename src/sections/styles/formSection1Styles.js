import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import normalize from 'react-native-normalize';

const formSection1Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  textStyle: {
    fontSize: metrics.size17,
    color: colors.black4A,
    fontWeight: '500',
  },
  textContainer: {
    marginHorizontal: metrics.size16,
  },
  inputPlaceholderSeparator: {
    borderColor: colors.lightGrey,
  },
  inputFieldStyle: {
    marginBottom: normalize(metrics.size25),
  },
});

export default formSection1Styles;
