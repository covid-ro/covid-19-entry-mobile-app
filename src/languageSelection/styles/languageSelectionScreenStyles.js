import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes';

const languageSelectionScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logo: {
    height: metrics.size120,
    width: metrics.size120,
    alignSelf: 'center',
    marginTop: metrics.size73,
  },
  titleStyle: {
    marginTop: metrics.size258,
    color: colors.darkGrey,
    fontSize: metrics.size17,
    textAlign: 'center',
  },
  subTitleStyle: {
    color: colors.opacityGrey,
    fontSize: metrics.size17,
    textAlign: 'center',
    marginBottom: metrics.size10,
  },
  buttonContainer: {
    marginTop: metrics.size34,
  },
});

export default languageSelectionScreenStyles;
