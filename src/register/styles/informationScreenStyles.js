import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import DeviceInfo from 'react-native-device-info';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  informationLabelStyle: {
    marginStart: metrics.size15,
    marginEnd: metrics.size15,
    marginTop: normalize(metrics.size37),
    paddingBottom: normalize(metrics.size40),
    lineHeight: metrics.size25,
  },
  content: {
    flex: 1,
    marginTop: metrics.size27,
    alignContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: normalize(metrics.size357),
    backgroundColor: colors.white,
    width: metrics.cardWidth,
    borderRadius: metrics.size6,
    borderWidth: metrics.size1,
    borderColor: colors.cardBorderGrey,
    marginBottom: normalize(metrics.size62),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    height: metrics.size120,
    width: metrics.size120,
    alignSelf: 'center',
    marginTop: DeviceInfo.hasNotch()
      ? normalize(metrics.size115)
      : normalize(metrics.size73),
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    marginBottom: normalize(metrics.size50),
  },
  boldText: {
    fontWeight: 'bold',
  },
});
