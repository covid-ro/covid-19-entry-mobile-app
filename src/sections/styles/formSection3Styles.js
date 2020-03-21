import {StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {colors, metrics} from '../../themes';

const passportDataScreenStyles = StyleSheet.create({
  container: {
    flex: metrics.size1,
    backgroundColor: colors.white,
  },
  title: {
    marginBottom: metrics.size15,
    marginTop: metrics.size22,
    marginLeft: metrics.size15,
    fontSize: metrics.size17,
    color: colors.black4A,
    fontWeight: '500',
  },
});

export default passportDataScreenStyles;
