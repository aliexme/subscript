import React, { useCallback } from 'react'
import { useActions, useStore } from '@tramvai/state'

import { activeIntlLocaleReducer, setActiveIntlLocaleAction } from 'modules/intl'
import { LanguageSelect } from 'entities/intl'
import type { LanguageSelectProps } from 'entities/intl'

export type ActiveLanguageSelectProps = LanguageSelectProps

export const ActiveLanguageSelect: React.FC<ActiveLanguageSelectProps> = (props) => {
  const { ...languageSelectProps } = props

  const activeIntlLocale = useStore(activeIntlLocaleReducer)
  const setActiveIntlLocale = useActions(setActiveIntlLocaleAction)

  const onLanguageChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newActiveIntlLocale = event.target.value
      setActiveIntlLocale(newActiveIntlLocale)
    },
    [setActiveIntlLocale]
  )

  return <LanguageSelect {...languageSelectProps} value={activeIntlLocale} onChange={onLanguageChange} />
}
