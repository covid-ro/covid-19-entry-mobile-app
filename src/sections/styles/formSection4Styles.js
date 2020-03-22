import {StyleSheet, Dimensions} from 'react-native';
import {colors, metrics} from '../../themes';

const formSection4Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  title: {
    marginBottom: metrics.size15,
    marginTop: metrics.size22,
    marginLeft: metrics.size15,
    fontSize: metrics.size17,
    color: colors.black4A,
    fontWeight: '500',
  },
  countryPlaceholder: {
    fontSize: metrics.size15,
    color: colors.black4A,
    fontWeight: 'normal',
    width: metrics.size200,
  },
  pickerDivider: {
    marginLeft: metrics.size15,
    marginRight: metrics.size15,
    borderBottomColor: colors.greyE7,
    borderBottomWidth: metrics.size1,
  },
  picker: {
    width: Dimensions.get('screen').width - metrics.size30,
  },
  pickerIcon: {
    paddingTop: metrics.size15,
    position: 'absolute',
    right: -metrics.size15,
    color: colors.darkGrey,
  },
  pickerText: {
    paddingTop: metrics.size15,
    position: 'absolute',
    left: -metrics.size15,
  },
  pickerPlaceHolder: {
    paddingTop: metrics.size15,
    fontSize: metrics.size15,
    fontWeight: 'normal',
    color: colors.darkGrey,
  },
  textInputBorder: {
    borderBottomColor: '#E7EBED',
  },
  textInputPlaceholder: {
    color: colors.darkGrey,
    fontWeight: 'normal',
    fontSize: metrics.size15,
  },
});

export default formSection4Styles;
