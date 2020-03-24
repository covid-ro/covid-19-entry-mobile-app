import {StyleSheet, Dimensions} from 'react-native';
import {colors, metrics} from '../../themes';

const windowWidth = Dimensions.get('window').width;

const formSection3Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginBottom: metrics.size50,
  },
  title: {
    marginTop: metrics.size22,
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
    width: windowWidth - metrics.size60,
    height: metrics.size18,
  },
  androidPicker: {
    left: -metrics.size8,
    paddingBottom: metrics.size30,
    width: windowWidth - metrics.size60,
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
  androidPickerSeparator: {
    borderBottomColor: colors.greyE7,
    borderBottomWidth: metrics.size1,
    marginHorizontal: metrics.size16,
  },
  inputContainer: {
    marginTop: metrics.size36,
  },
  textInputBorder: {
    borderBottomColor: '#E7EBED',
  },
  textInputPlaceholder: {
    color: colors.darkGrey,
    fontWeight: 'normal',
    fontSize: metrics.size15,
  },
  datePickerContainer: {
    marginTop: metrics.size32,
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
  datePickerStyle: {
    marginTop: metrics.size35,
  },
  datePickerSeparator: {
    borderBottomColor: colors.greyE7,
    borderBottomWidth: metrics.size1,
    marginHorizontal: metrics.size16,
  },
  separator: {
    borderBottomColor: colors.greyE7,
    borderBottomWidth: metrics.size1,
    marginHorizontal: metrics.size16,
    marginTop: metrics.size4,
  },
  inputStyle: {
    height: metrics.size25,
    color: colors.black4A,
  },
  inputSeparator: {
    borderBottomColor: colors.greyE7,
  },
  countriesTitleContainer: {
    marginTop: metrics.size45,
    height: metrics.size24,
    marginLeft: metrics.size16,
  },
  countriesTitleText: {
    fontSize: metrics.size17,
    fontWeight: '500',
    color: colors.black4A,
  },
  countriesTextContainer: {
    height: metrics.size18,
    marginTop: metrics.size34,
  },
  countriesText: {
    fontSize: metrics.size15,
    fontWeight: 'normal',
    color: colors.opacityGrey,
    marginLeft: metrics.size16,
  },
});

export default formSection3Styles;
