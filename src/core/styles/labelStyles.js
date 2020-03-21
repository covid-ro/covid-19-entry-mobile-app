import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import DeviceInfo from 'react-native-device-info';

const labelStyles = StyleSheet.create({
  textStyle: {
    fontSize: metrics.size17,
    color: colors.black4A,
    fontWeight: '500',
    textAlign: 'left',
  },
});

export default labelStyles;
