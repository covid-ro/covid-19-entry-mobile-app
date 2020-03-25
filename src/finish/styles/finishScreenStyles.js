import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes';

const finishScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    marginBottom: metrics.size50,
  },
  marginTop: {
    marginTop: metrics.size24,
  },
  card: {
    height: metrics.size391,
    backgroundColor: colors.white,
    borderRadius: metrics.size6,
    borderWidth: metrics.size1,
    borderColor: colors.cardBorderGrey,
    marginHorizontal: metrics.size16,
    marginTop: metrics.size57,
    marginBottom: metrics.size35,
    padding: metrics.size16,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  title: {
    color: colors.darkGrey,
    fontSize: metrics.size17,
    fontWeight: 'bold',
    marginBottom: metrics.size20,
  },
  textStyle: {
    color: colors.darkGrey,
    fontSize: metrics.size17,
    marginBottom: metrics.size20,
  },
});

export default finishScreenStyles;
