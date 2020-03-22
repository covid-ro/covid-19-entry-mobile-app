import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const fromSection5Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    marginHorizontal: metrics.size35,
    marginBottom: metrics.size30,
  },
  textContainer: {
    marginTop: metrics.size22,
    marginHorizontal: metrics.size16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.size30,
  },
  topTextStyle: {
    marginTop: metrics.size22,
    marginHorizontal: metrics.size16,
    marginBottom: metrics.size5,
  },
  alertLabelStyle: {
    color: colors.darkBlue,
    fontWeight: 'bold',
    marginHorizontal: metrics.size16,
    marginTop: metrics.size20,
    marginBottom: metrics.size10,
  },
  alertMessageStyle: {
    marginHorizontal: metrics.size16,
    lineHeight: metrics.size17,
  },
  inputStyle: {
    marginTop: metrics.size5,
  },
  imageStyle: {
    position: 'absolute',
    top: metrics.size70,
    right: metrics.size25,
  },
});

export default fromSection5Styles;
