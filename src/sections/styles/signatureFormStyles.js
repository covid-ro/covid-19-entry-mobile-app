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
  placeholderStyle: {
    textAlign: 'center',
    fontSize: metrics.size16,
    color: colors.opacityGrey,
  },
  signatureStyle: {
    flex: 1,
    marginHorizontal: metrics.size35,
    marginTop: metrics.size20,
    height: metrics.size153,
    borderColor: colors.opacityGrey,
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    borderRadius: metrics.size10,
  },
});

export default signatureFormStyles;
