import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const formSection4Styles = StyleSheet.create({
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

  datePickerPlaceholderStyle: {
    top: metrics.size6,
    paddingLeft: metrics.size16,
    color: colors.opacityGrey,
    fontSize: metrics.size15,
    fontWeight: 'normal',
  },
  datePickerTextStyle: {
    top: metrics.size6,
    paddingLeft: metrics.size10,
    color: colors.black4A,
    fontSize: metrics.size15,
    marginLeft: metrics.size6,
    fontWeight: 'normal',
  },
  separator: {
    borderBottomColor: colors.darkGrey,
    borderBottomWidth: metrics.size1,
    marginHorizontal: metrics.size10,
    marginTop: metrics.size1,
  },
  datePickerSeparator: {
    borderBottomColor: colors.greyE7,
    borderBottomWidth: metrics.size1,
    marginHorizontal: metrics.size16,
  },
});

export default formSection4Styles;
