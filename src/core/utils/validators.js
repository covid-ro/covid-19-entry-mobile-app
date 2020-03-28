const phoneValidator = phoneNumber =>
  phoneNumber.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);

export default {phoneValidator};
