import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  buttonStyle: {marginTop: normalize(metrics.size30)},
  informationLabelStyle: {
    marginStart: metrics.size15,
    marginEnd: metrics.size15,
    marginTop: normalize(metrics.size32),
    lineHeight: metrics.size25,
    fontSize: metrics.size17,
    color: colors.gray,
    fontWeight: '500',
  },
  phoneLabel: {
    marginTop: normalize(metrics.size43),
    marginLeft: metrics.size15,
  },
  picker: {
    marginTop: metrics.size43,
    marginLeft: metrics.size15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flagStyle: {
    marginBottom: metrics.size10,
  },
  focusedSeparator: {
    marginTop: metrics.size8,
    borderBottomWidth: metrics.size2,
    borderColor: colors.darkBlue,
  },
  labelPlaceholder: {
    marginLeft: metrics.size40,
    top: -metrics.size10,
    fontSize: metrics.size13,
    fontWeight: '500',
    color: colors.darkBlue,
  },
  unselectedLabel: {
    color: 'transparent',
  },
  separator: {
    marginTop: metrics.size8,
    borderBottomWidth: metrics.size1,
    borderBottomColor: colors.greyE7,
  },
  textInputPicker: {
    color: colors.darkGrey,
    height: metrics.size18,
    fontSize: metrics.size15,
    fontWeight: 'normal',
    padding: metrics.size0,
  },
  pickerContainer: {
    marginHorizontal: metrics.size16,
    marginTop: metrics.size43,
  },
  placeholderTextColor: {color: colors.opacityGrey},
  countryPicker: {
    height: metrics.size0,
    opacity: metrics.size0,
  },
});
