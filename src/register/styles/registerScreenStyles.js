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
    borderColor: colors.cardBorderGrey,
    justifyContent: 'flex-start',
    paddingTop: metrics.size22,
    alignContent: 'center',
    marginTop: metrics.size57,
    marginBottom: metrics.size35,
  },
  marginBottom: {
    marginBottom: metrics.size50,
  },
});

export default registerScreenStyles;
