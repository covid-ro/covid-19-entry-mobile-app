import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import normalize from 'react-native-normalize';

const formSection4Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  topTextStyle: {
    marginHorizontal: metrics.size16,
  },
  inputStyle: {
    marginTop: metrics.size11,
  },
  inputPlaceholderSeparator: {
    marginTop: metrics.size4,
  },
  datePickerPlaceholderStyle: {
    top: metrics.size6,
    paddingLeft: metrics.size16,
    color: colors.opacityGrey,
    fontSize: metrics.size15,
    fontWeight: 'normal',
  },
  datepickerContainer: {
    marginTop: metrics.size15,
  },
  valueSeparator: {
    borderBottomColor: colors.darkBlue,
    borderBottomWidth: metrics.size2,
    marginHorizontal: metrics.size16,
  },
  separator: {
    borderBottomColor: colors.greyE7,
    borderBottomWidth: metrics.size1,
    marginHorizontal: metrics.size16,
  },
  recompleteTextContainer: {
    marginTop: normalize(metrics.size30),
    marginHorizontal: metrics.size16,
    marginBottom: normalize(metrics.size18),
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
  datePickerTextStyle: {
    top: metrics.size6,
    paddingLeft: metrics.size10,
    color: colors.black4A,
    fontSize: metrics.size15,
    marginLeft: metrics.size6,
    fontWeight: 'normal',
  },
  datePickerSeparator: {
    borderBottomColor: colors.greyE7,
    borderBottomWidth: metrics.size1,
    marginHorizontal: metrics.size16,
  },
  bottomMargin: {
    marginBottom: normalize(metrics.size25),
  },
});

export default formSection4Styles;
