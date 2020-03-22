import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const formSection8Styles = StyleSheet.create({
  container: {
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
    marginLeft: metrics.size16,
    marginRight: metrics.size32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.size30,
  },
});

export default formSection8Styles;
