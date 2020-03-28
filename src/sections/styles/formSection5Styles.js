import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import normalize from 'react-native-normalize';

const formSection5Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    marginHorizontal: normalize(metrics.size35),
    marginBottom: normalize(metrics.size30),
  },
  textContainer: {
    marginHorizontal: metrics.size16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalize(metrics.size30),
  },
  topTextStyle: {
    marginHorizontal: metrics.size16,
    marginBottom: metrics.size5,
  },
  alertLabelStyle: {
    color: colors.darkBlue,
    fontWeight: 'bold',
    fontSize: metrics.size17,
    marginHorizontal: metrics.size16,
    marginTop: normalize(metrics.size48),
    marginBottom: metrics.size15,
  },
  alertMessageStyle: {
    marginHorizontal: metrics.size16,
    marginBottom: normalize(metrics.size25),
  },
  imageStyle: {
    position: 'absolute',
    right: metrics.size0,
    bottom: metrics.size0,
    marginRight: metrics.size25,
    marginBottom: metrics.size5,
  },
});

export default formSection5Styles;
