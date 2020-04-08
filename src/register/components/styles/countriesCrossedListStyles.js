import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../themes';

const countriesCrossedListStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: colors.white,
    paddingLeft: metrics.size16,
    paddingTop: metrics.size16,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: metrics.size16,
  },
  separator: {
    marginTop: metrics.size16,
    backgroundColor: colors.graySeparator,
    height: metrics.size1,
  },
  textItem: {
    color: colors.black,
    fontSize: metrics.size17,
  },
  headerContainer: {
    paddingLeft: metrics.size16,
    paddingTop: metrics.size30,
    paddingBottom: metrics.size16,
    opacity: metrics.size1,
    backgroundColor: colors.white,
  },
  headerText: { 
    color: colors.black,
    fontSize: metrics.size17,
    fontWeight: 'bold'
  }
});

export default countriesCrossedListStyles;
