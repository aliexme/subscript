import type { Locale } from 'date-fns'
import enLocale from 'date-fns/locale/en-US'
import ruLocale from 'date-fns/locale/ru'

import { IntlLocale } from 'shared/lib/i18n'

export const DATE_FNS_LOCALES_MAP: Record<IntlLocale, Locale> = {
  [IntlLocale.EN]: enLocale,
  [IntlLocale.RU]: ruLocale,
}
