import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes';
import normalize from 'react-native-normalize';
import DeviceInfo from 'react-native-device-info';

const codesScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayBackground,
  },
  card: {
    height: normalize(metrics.size377, 'height'),
    backgroundColor: colors.white,
    borderRadius: metrics.size6,
    borderWidth: metrics.size1,
    borderColor: colors.cardBorderGrey,
    marginTop: normalize(metrics.size30),
    marginBottom: normalize(metrics.size10),
    padding: metrics.size16,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: metrics.size16,
    marginTop: metrics.size40,
  },
  titleStyle: {
    fontSize: metrics.size16,
    color: colors.black4A,
    fontWeight: '500',
    textAlign: 'center',
  },
  codeContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.size30,
  },
  codeStyle: {
    marginTop: metrics.size5,
    fontSize: metrics.size22,
    color: colors.darkBlue,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nameTextStyle: {
    marginVertical: metrics.size5,
    fontSize: metrics.size16,
    color: colors.black4A,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dotStyle: {
    width: metrics.size7,
    height: metrics.size7,
    borderRadius: metrics.size5,
    backgroundColor: colors.darkBlue,
  },
  pagination: {
    paddingVertical: metrics.size8,
    marginBottom: metrics.size15,
  },
  qrStyle: {
    flex: 1,
    marginTop: metrics.size25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  generalButtonContainer: {
    justifyContent: 'flex-end',
    marginTop: metrics.size50,
    marginBottom: DeviceInfo.hasNotch() ? metrics.size50 : metrics.size25,
  },
  marginTop: {
    marginTop: metrics.size24,
  },
});

export default codesScreenStyles;
