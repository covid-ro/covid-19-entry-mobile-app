import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const signatureScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  header: {
    flexDirection: 'row',
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.size20,
    borderBottomColor: colors.graySeparator,
    borderWidth: 1,
  },
  headerButton: {
    marginRight: metrics.size20,
  },
});

export default signatureScreenStyles;
