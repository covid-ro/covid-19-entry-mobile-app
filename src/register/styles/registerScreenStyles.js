import {StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {colors, metrics} from '../../themes';
import normalize from 'react-native-normalize';

const registerScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.size6,
    borderWidth: metrics.size1,
    borderColor: colors.cardBorderGrey,
    justifyContent: 'flex-start',
    paddingTop: normalize(metrics.size22),
    alignContent: 'center',
    marginTop: DeviceInfo.hasNotch() ? metrics.size57 : metrics.size25,
  },
  generalButtonContainer: {
    justifyContent: 'flex-end',
    marginTop: DeviceInfo.hasNotch() ? metrics.size64 : metrics.size32,
    marginBottom: DeviceInfo.hasNotch() ? metrics.size50 : metrics.size25,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});

export default registerScreenStyles;
