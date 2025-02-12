import { getLanguageFromURL } from './utils';
import type { Translations } from './types';
import es from './translations/es';
import en from './translations/en';

const translations: Translations = { es, en };

export function t(key: string, pathname: string): string {
  const lang = getLanguageFromURL(pathname);
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    if (value === undefined) {
      return key;
    }
    value = value[k];
  }
  
  return value || key;
}