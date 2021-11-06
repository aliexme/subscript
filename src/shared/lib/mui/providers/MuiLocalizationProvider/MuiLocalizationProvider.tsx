import React from 'react'
import { useStore } from '@tramvai/state'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateAdapter from '@mui/lab/AdapterDateFns'
import type { Locale } from 'date-fns'
import enLocale from 'date-fns/locale/en-US'
import ruLocale from 'date-fns/locale/ru'

import { activeIntlLocaleStore } from 'modules/i18n'
import { IntlLocale } from 'shared/lib/i18n'

const localesMap: Record<IntlLocale, Locale> = {
  [IntlLocale.EN]: enLocale,
  [IntlLocale.RU]: ruLocale,
}

export const MuiLocalizationProvider: React.FC = (props) => {
  const { children } = props

  const locale = useStore(activeIntlLocaleStore) as IntlLocale

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={localesMap[locale]}>
      {children}
    </LocalizationProvider>
  )
}
