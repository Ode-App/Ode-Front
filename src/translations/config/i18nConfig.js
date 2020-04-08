import { I18nManager } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

import en from '../en.json';
import es from '../es.json';
import ca from '../ca.json';

const translationGetters = {
  en: () => en,
  es: () => es,
  ca: () => ca,
};

const saveTranslate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const idiomaSplit = (Localization && Localization.locales && Localization.locales[0]) ? Localization.locales[0].split('-') : 'en';
const fallback = { languageTag: 'en', isRTL: false };
const deviceLanguage = (Localization && Localization.isRTL)
  ? { languageTag: idiomaSplit[0], isRTL: Localization.isRTL } : { languageTag: idiomaSplit[0], isRTL: false };
const { languageTag, isRTL } = Object.prototype.hasOwnProperty.call(translationGetters, idiomaSplit[0])
  ? deviceLanguage : fallback;
saveTranslate.cache.clear();
I18nManager.forceRTL(isRTL);
i18n.translations = { [languageTag]: translationGetters[languageTag]() };
i18n.locale = languageTag;

export function translate(name) {
  return saveTranslate(name);
}

export default translate;
