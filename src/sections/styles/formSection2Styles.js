import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import DeviceInfo from 'react-native-device-info';

const selectIdentityScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
});

export default selectIdentityScreenStyles;
