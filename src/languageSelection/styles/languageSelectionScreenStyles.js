import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes';
import DeviceInfo from 'react-native-device-info';
import normalize from 'react-native-normalize';

const languageSelectionScreenStyles = StyleSheet.create({
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
  titleStyle: {
    color: colors.darkGrey,
    fontWeight: '500',
    fontSize: metrics.size17,
    textAlign: 'center',
    marginBottom: metrics.size3,
  },
  subTitleStyle: {
    color: colors.opacityGrey,
    fontSize: metrics.size17,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: metrics.size10,
  },
  buttonContainer: {
    marginTop: normalize(metrics.size34),
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: normalize(metrics.size140),
  },
});

export default languageSelectionScreenStyles;
