import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import normalize from 'react-native-normalize';

const formSection6Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  title: {
    marginBottom: metrics.size15,
    marginLeft: metrics.size15,
    fontSize: metrics.size17,
    color: colors.black4A,
  },
  textContainer: {
    marginHorizontal: metrics.size16,
    marginBottom: normalize(metrics.size27),
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.size35,
    marginBottom: normalize(metrics.size40),
  },
});

export default formSection6Styles;
