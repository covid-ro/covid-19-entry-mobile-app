import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const signatureScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signatureArea: {
    flex: 1,
    flexDirection: 'row',
  },
  bottom: {
    flexShrink: 1,
    height: metrics.size70,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopColor: colors.graySeparator,
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  deleteContainer: {
    flex: 1,
    marginHorizontal: metrics.size25,
    marginBottom: metrics.size15,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: metrics.size35,
    justifyContent: 'center',
    marginBottom: metrics.size10,
  },
  textStyle: {
    textAlign: 'center',
    color: colors.gray,
    fontWeight: '500',
    fontSize: metrics.size14,
  },
  deleteStyle: {
    fontSize: metrics.size20,
    color: colors.darkBlue,
    fontWeight: '500',
  },
});

export default signatureScreenStyles;
