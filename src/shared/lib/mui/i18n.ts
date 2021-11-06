import { IntlLocale } from 'shared/lib/i18n'

export const DATE_PICKER_MASK_MAP: Record<IntlLocale, string> = {
  [IntlLocale.EN]: '__/__/____',
  [IntlLocale.RU]: '__.__.____',
}
