import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const formSection1Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputFieldStyle: {
    marginBottom: metrics.size5,
  },
  textContainer: {
    marginTop: metrics.size22,
    marginHorizontal: metrics.size16,
    marginBottom: metrics.size10,
  },
});

export default formSection1Styles;
