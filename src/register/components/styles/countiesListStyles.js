import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../themes';

const countiesListStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    marginTop: metrics.size12,
    backgroundColor: colors.graySeparator,
    height: metrics.size1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  item: {
    backgroundColor: colors.white,
    paddingLeft: metrics.size16,
    paddingTop: metrics.size16,
  },
  textItem: {
    color: colors.black,
    fontSize: metrics.size17,
  },
});
export default countiesListStyles;
