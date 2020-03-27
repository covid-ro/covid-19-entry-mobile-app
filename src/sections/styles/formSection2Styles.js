import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import normalize from 'react-native-normalize';

const formSection2Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    marginTop: normalize(metrics.size32),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: normalize(metrics.size35),
    marginBottom: normalize(metrics.size64),
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
    marginBottom: normalize(metrics.size25),
  },
});

export default formSection2Styles;
