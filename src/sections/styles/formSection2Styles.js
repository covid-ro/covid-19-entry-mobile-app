import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';


const selectIdentityScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: metrics.size35,
    marginBottom: metrics.size20,
  },
  textContainer: {
    marginTop: metrics.size22,
    marginHorizontal: metrics.size16,
    marginBottom: metrics.size30,
  },
  title: {
    marginLeft: metrics.size15,
    fontSize: metrics.size17,
    color: colors.black4A,
    fontWeight: '500',
  },
});

export default selectIdentityScreenStyles;
