import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const fromSection4Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  topTextStyle: {
    marginTop: metrics.size22,
    marginHorizontal: metrics.size16,
  },
  inputStyle: {
    marginTop: metrics.size5,
  },
  datePickerStyle: {
    marginHorizontal: metrics.size5,
  },
  datePickerPlaceholderStyle: {
    color: colors.darkGrey,
    fontSize: metrics.size14,
  },
  separator: {
    borderBottomColor: colors.darkGrey,
    borderBottomWidth: metrics.size1,
    marginHorizontal: metrics.size10,
    marginTop: metrics.size1,
  },
});

export default fromSection4Styles;
