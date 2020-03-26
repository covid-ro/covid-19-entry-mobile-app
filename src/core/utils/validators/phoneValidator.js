import {Alert} from 'react-native';
import {strings} from '../../strings';

const phoneValidator = phoneNumber => {
  var regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  if (phoneNumber.match(regex)) {
    return true;
  } else {
    Alert.alert(strings.phoneNumberError);
    return false;
  }
};
export default phoneValidator;
