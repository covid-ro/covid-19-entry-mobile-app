import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import normalize from 'react-native-normalize';

const signatureFormStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.size35,
    marginBottom: normalize(metrics.size26),
  },
  textContainer: {
    marginHorizontal: metrics.size16,
    marginBottom: normalize(metrics.size36),
  },
  signatureStyle: {
    flex: 1,
    marginHorizontal: metrics.size35,
    height: 100,
    // borderColor: colors.gray,
    // borderWidth: 1,
  },
  flex: {
    flex: 1,
  },
});

export default signatureFormStyles;
