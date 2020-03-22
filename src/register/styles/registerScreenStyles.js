import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const registerScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.size6,
    borderWidth: metrics.size1,
    borderColor: colors.opacityGrey,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  marginBottom: {
    marginBottom: metrics.size50,
  },
});

export default registerScreenStyles;
