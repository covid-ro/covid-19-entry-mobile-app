import {StyleSheet} from 'react-native';
import {metrics} from '../../themes';
import normalize from 'react-native-normalize';

const formSection10Styles = StyleSheet.create({
  textContainer: {
    marginLeft: metrics.size16,
    marginRight: metrics.size32,
  },
  customInput: {
    height: normalize(metrics.size50),
    paddingBottom: metrics.size1,
  },
  customLabel: {
    height: normalize(metrics.size36),
  },
});

export default formSection10Styles;
