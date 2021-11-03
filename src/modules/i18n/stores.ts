import { createEvent, createReducer } from '@tramvai/state'

export const setActiveIntlLocale = createEvent<string>('set active locale')

export const activeIntlLocaleStore = createReducer<string>('activeLocale', 'en').on(
  setActiveIntlLocale,
  (_state, locale) => locale
)
