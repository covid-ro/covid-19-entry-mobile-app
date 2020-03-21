import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes';
import DeviceInfo from 'react-native-device-info';

const languageSelectionScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logo: {
    height: metrics.size120,
    width: metrics.size120,
    alignSelf: 'center',
    marginTop: DeviceInfo.hasNotch() ? metrics.size115 : metrics.size73,
  },
  titleStyle: {
    color: colors.darkGrey,
    fontSize: metrics.size17,
    textAlign: 'center',
    marginBottom: metrics.size3,
  },
  subTitleStyle: {
    color: colors.opacityGrey,
    fontSize: metrics.size17,
    textAlign: 'center',
    marginBottom: metrics.size10,
  },
  buttonContainer: {
    marginTop: metrics.size34,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: metrics.size140,
  },
});

export default languageSelectionScreenStyles;
