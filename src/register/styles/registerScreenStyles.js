import {StyleSheet} from 'react-native';
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
    marginTop: normalize(metrics.size57),
    marginBottom: normalize(metrics.size35),
  },
  marginBottom: {
    marginBottom: normalize(metrics.size50),
  },
});

export default registerScreenStyles;
