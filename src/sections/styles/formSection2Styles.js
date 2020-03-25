import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const formSection2Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    marginTop: metrics.size32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.size35,
    marginBottom: metrics.size64,
  },
  textContainer: {
    marginHorizontal: metrics.size16,
  },
  title: {
    marginLeft: metrics.size15,
    fontSize: metrics.size17,
    color: colors.black4A,
    fontWeight: '500',
  },
  inputContainer: {
    marginBottom: metrics.size25,
  },
});

export default formSection2Styles;
