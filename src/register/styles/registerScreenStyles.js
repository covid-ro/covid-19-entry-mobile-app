import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import DeviceInfo from 'react-native-device-info';

const registerScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.white,
    height: metrics.screenHeight - metrics.size300,
    borderRadius: metrics.size6,
    marginTop: DeviceInfo.hasNotch() ? metrics.size93 : metrics.size73,
    borderWidth: metrics.size1,
    borderColor: colors.opacityGrey,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default registerScreenStyles;
