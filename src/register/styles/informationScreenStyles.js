import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import DeviceInfo from 'react-native-device-info';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  informationLabelStyle: {
    marginStart: metrics.size15,
    marginEnd: metrics.size15,
    marginTop: metrics.size37,
    paddingBottom: metrics.size40,
    lineHeight: metrics.size25,
  },
  content: {
    flex: 1,
    marginTop: metrics.size27,
    alignContent: 'center',
    alignItems: 'center',
  },

  card: {
    flex: 1,
    backgroundColor: colors.white,
    width: metrics.cardWidth,
    borderRadius: metrics.size6,
    borderWidth: metrics.size1,
    borderColor: colors.cardBorderGrey,
    marginBottom: metrics.size62,
  },

  logo: {
    height: metrics.size120,
    width: metrics.size120,
    alignSelf: 'center',
    marginTop: DeviceInfo.hasNotch() ? metrics.size115 : metrics.size73,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    marginBottom: metrics.size50,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
