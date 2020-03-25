import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const formSection9Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.size35,
    marginBottom: metrics.size40,
  },
  textContainer: {
    marginHorizontal: metrics.size16,
    marginBottom: metrics.size15,
  },
  recompleteTextContainer: {
    marginTop: metrics.size30,
    marginHorizontal: metrics.size16,
    marginBottom: metrics.size18,
  },
  grayText: {
    fontSize: metrics.size15,
    textAlign: 'center',
    color: colors.black4A,
  },
  blueText: {
    marginTop: metrics.size5,
    textAlign: 'center',
    color: colors.darkBlue,
    fontWeight: '500',
    fontSize: metrics.size15,
  },
});

export default formSection9Styles;
