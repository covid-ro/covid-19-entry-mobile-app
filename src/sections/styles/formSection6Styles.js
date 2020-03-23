import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const formSection6Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  title: {
    marginBottom: metrics.size15,
    marginTop: metrics.size22,
    marginLeft: metrics.size15,
    fontSize: metrics.size17,
    color: colors.black4A,
  },
  textContainer: {
    marginTop: metrics.size22,
    marginHorizontal: metrics.size16,
    marginBottom: metrics.size22,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: metrics.size35,
  },
});

export default formSection6Styles;
