import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../themes';
import normalize from 'react-native-normalize';

const progressHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: normalize(metrics.size40, 'height'),
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingHorizontal: metrics.size20,
  },
  circle: {
    height: metrics.size8,
    width: metrics.size8,
    borderRadius: metrics.size8 / 2,
    backgroundColor: colors.darkBlue,
    alignSelf: 'center',
  },
  progress: {
    backgroundColor: colors.darkBlue,
    height: metrics.size2,
    width: '10%',
    alignSelf: 'center',
  },
  progressLight: {
    backgroundColor: colors.lightBlue,
    height: metrics.size2,
    width: '90%',
    alignSelf: 'center',
  },
  progressContainer: {
    flex: 1,
    flexDirection: 'row',
    marginRight: metrics.size30,
  },
  textStyle: {
    fontSize: metrics.size13,
    color: colors.darkBlue,
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default progressHeaderStyles;
