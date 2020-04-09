import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../themes';

const searchBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: metrics.size1,
    marginLeft: metrics.size16,
    marginRight: metrics.size16,
    borderColor: colors.white,
    backgroundColor: colors.backgroundE0,
    height: metrics.size40,
    borderRadius: metrics.size10,
  },
  searchIcon: {
    height: metrics.size22,
    width: metrics.size22,
    marginLeft: metrics.size10,
  },
  text: {
    padding: metrics.size0,
    color: colors.black,
    fontSize: metrics.size17,
    marginLeft: metrics.size5,
    width: '100%',
    paddingRight: metrics.size16,
  },
  cancelText: {
    color: colors.blue,
    fontSize: metrics.size17,
    marginRight: metrics.size16,
  },
});

export default searchBarStyles;
