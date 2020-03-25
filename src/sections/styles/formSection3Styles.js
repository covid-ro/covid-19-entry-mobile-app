import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const formSection3Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  title: {
    marginHorizontal: metrics.size16,
    fontSize: metrics.size17,
    color: colors.black4A,
    fontWeight: '500',
  },
  pickerContainer: {
    marginTop: metrics.size27,
    marginLeft: metrics.size16,
    marginRight: metrics.size16,
  },
  picker: {
    width: metrics.screenWidth - metrics.size60,
    height: metrics.size18,
  },
  androidPicker: {
    left: -metrics.size8,
    paddingBottom: metrics.size30,
    width: metrics.screenWidth - metrics.size60,
    height: metrics.size18,
    color: colors.black4A,
  },
  pickerIcon: {
    position: 'absolute',
    right: metrics.size10,
    color: colors.black4A,
    opacity: metrics.size0_7,
  },
  pickerText: {
    position: 'absolute',
    left: -metrics.size16,
    fontSize: metrics.size15,
    fontWeight: 'normal',
    color: colors.black4A,
  },
  pickerPlaceHolder: {
    fontSize: metrics.size15,
    fontWeight: 'normal',
    color: colors.opacityGrey,
  },
  valueAndroidSeparator: {
    borderBottomColor: colors.darkBlue,
    borderBottomWidth: metrics.size2,
    marginHorizontal: metrics.size16,
  },
  androidPickerSeparator: {
    borderBottomColor: colors.greyE7,
    borderBottomWidth: metrics.size1,
    marginHorizontal: metrics.size16,
  },
  inputContainer: {
    marginTop: metrics.size11,
  },
  dateContainer: {
    marginTop: metrics.size15,
  },
  datePickerTextStyle: {
    top: metrics.size6,
    paddingLeft: metrics.size10,
    color: colors.black4A,
    fontSize: metrics.size15,
    marginLeft: metrics.size6,
    fontWeight: 'normal',
  },
  datePickerPlaceholderStyle: {
    top: metrics.size6,
    paddingLeft: metrics.size16,
    color: colors.opacityGrey,
    fontSize: metrics.size15,
    fontWeight: 'normal',
  },
  valueDatePickerSeparator: {
    borderBottomColor: colors.darkBlue,
    borderBottomWidth: metrics.size2,
    marginHorizontal: metrics.size16,
  },
  datePickerSeparator: {
    borderBottomColor: colors.greyE7,
    borderBottomWidth: metrics.size1,
    marginHorizontal: metrics.size16,
  },
  valueSeparator: {
    borderBottomColor: colors.darkBlue,
    borderBottomWidth: metrics.size2,
    marginHorizontal: metrics.size16,
    marginTop: metrics.size4,
  },
  separator: {
    borderBottomColor: colors.greyE7,
    borderBottomWidth: metrics.size1,
    marginHorizontal: metrics.size16,
    marginTop: metrics.size4,
  },
  placeholderSeparatorStyle: {
    marginTop: metrics.size4,
  },
  focusedSeparatorStyle: {
    marginTop: metrics.size4,
  },
  countriesTitleContainer: {
    marginTop: metrics.size45,
    height: metrics.size24,
    marginHorizontal: metrics.size16,
  },
  countriesTitleText: {
    fontSize: metrics.size17,
    fontWeight: '500',
    color: colors.black4A,
  },
  countriesTextContainer: {
    marginTop: metrics.size34,
    minHeight: metrics.size18,
    maxHeight: metrics.size100,
    marginHorizontal: metrics.size16,
  },
  countriesText: {
    fontSize: metrics.size15,
    fontWeight: 'normal',
    color: colors.opacityGrey,
  },
  selectedCountriesText: {
    color: colors.black4A,
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
  bottomMargin: {
    marginBottom: metrics.size25,
  },
});

export default formSection3Styles;
