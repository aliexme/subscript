import type { IntlTranslations } from './translations'
import { en } from './translations/en'
import { ru } from './translations/ru'

export enum IntlLocale {
  RU = 'ru',
  EN = 'en',
}

export type IntlMessages = Record<IntlLocale, IntlTranslations>

export const intlMessages: IntlMessages = {
  [IntlLocale.EN]: en,
  [IntlLocale.RU]: ru,
}
