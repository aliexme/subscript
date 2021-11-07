import React from 'react'
import { useStore } from '@tramvai/state'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateAdapter from '@mui/lab/AdapterDateFns'

import { activeIntlLocaleStore } from 'modules/i18n'
import type { IntlLocale } from 'shared/lib/i18n'
import { DATE_FNS_LOCALES_MAP } from 'shared/lib/date-fns'

export const MuiLocalizationProvider: React.FC = (props) => {
  const { children } = props

  const locale = useStore(activeIntlLocaleStore) as IntlLocale

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={DATE_FNS_LOCALES_MAP[locale]}>
      {children}
    </LocalizationProvider>
  )
}
