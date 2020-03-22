import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import DeviceInfo from 'react-native-device-info';

const endScreenStyles = StyleSheet.create({
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
  card: {
    backgroundColor: colors.white,
    borderRadius: metrics.size6,
    borderWidth: metrics.size1,
    borderColor: colors.opacityGrey,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: metrics.size16,
    marginTop: metrics.size57,
    marginBottom: metrics.size35,
    flex: 1,
    padding: metrics.size16,
  },
  textStyle: {
    color: colors.darkGrey,
    fontSize: metrics.size17,
    marginBottom: metrics.size20,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    marginBottom: metrics.size50,
  },
});

export default endScreenStyles;
