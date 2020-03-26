import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import DeviceInfo from 'react-native-device-info';
import normalize from 'react-native-normalize';

const endScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logo: {
    height: metrics.size120,
    width: metrics.size120,
    alignSelf: 'center',
    marginTop: DeviceInfo.hasNotch()
      ? normalize(metrics.size115)
      : normalize(metrics.size73),
  },
  card: {
    height: normalize(metrics.size377, 'height'),
    backgroundColor: colors.white,
    borderRadius: metrics.size6,
    borderWidth: metrics.size1,
    borderColor: colors.cardBorderGrey,
    marginHorizontal: metrics.size16,
    marginTop: normalize(metrics.size57),
    marginBottom: normalize(metrics.size35),
    padding: metrics.size16,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  textStyle: {
    color: colors.darkGrey,
    fontSize: metrics.size17,
    marginBottom: metrics.size20,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    marginBottom: normalize(metrics.size50),
  },
});

export default endScreenStyles;
