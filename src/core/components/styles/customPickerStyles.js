import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {colors, metrics} from '../../../themes';

const customPickerStyles = StyleSheet.create({
  pickerContainer: {
    marginTop: normalize(metrics.size27),
    marginLeft: metrics.size16,
    marginRight: metrics.size16,
  },
  picker: {
    width: metrics.screenWidth - metrics.size60,
    height: metrics.size18,
  },
  androidPicker: {
    left: -metrics.size8,
    paddingBottom: normalize(metrics.size30),
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
  separator: {
    borderBottomColor: colors.greyE7,
    borderBottomWidth: metrics.size1,
    marginHorizontal: metrics.size16,
    marginTop: metrics.size4,
  },
  valueSeparator: {
    borderBottomColor: colors.darkBlue,
    borderBottomWidth: metrics.size2,
    marginHorizontal: metrics.size16,
    marginTop: metrics.size4,
  },
});

export default customPickerStyles;
