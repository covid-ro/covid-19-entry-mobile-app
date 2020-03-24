import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const formSection4Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  topTextStyle: {
    marginHorizontal: metrics.size16,
  },

  datePickerStyle: {
    marginHorizontal: metrics.size16,
    marginBottom: metrics.size20,
  },
  datePickerPlaceholderStyle: {
    top: metrics.size6,
    paddingLeft: metrics.size16,
    color: colors.opacityGrey,
    fontSize: metrics.size15,
    fontWeight: 'normal',
  },
  separator: {
    borderBottomColor: colors.greyE7,
    borderBottomWidth: metrics.size1,
    marginHorizontal: metrics.size16,
    marginBottom: metrics.size32,
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
  datePickerTextStyle: {
    top: metrics.size6,
    paddingLeft: metrics.size10,
    color: colors.black4A,
    fontSize: metrics.size15,
    marginLeft: metrics.size6,
    fontWeight: 'normal',
  },
});

export default formSection4Styles;
