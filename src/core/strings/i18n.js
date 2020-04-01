import I18n from 'react-native-i18n';
import en from './en';
import ro from './ro';

I18n.fallbacks = true;

I18n.translations = {
  en,
  ro,
};
I18n.locale = 'ro';

export default I18n;
