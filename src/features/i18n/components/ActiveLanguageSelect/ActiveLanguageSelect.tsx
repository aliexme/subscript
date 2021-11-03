import React, { useCallback } from 'react'
import { useActions, useStore } from '@tramvai/state'

import { activeIntlLocaleStore, setActiveIntlLocaleAction } from 'modules/i18n'
import { IntlLocale } from 'shared/lib/i18n'
import { TextField } from 'shared/UIKit/TextField'
import type { TextFieldProps } from 'shared/UIKit/TextField'
import { MenuItem } from 'shared/UIKit/Menu'

export type ActiveLanguageSelectProps = TextFieldProps

export const ActiveLanguageSelect: React.FC<ActiveLanguageSelectProps> = (props) => {
  const { ...textFieldProps } = props

  const activeIntlLocale = useStore(activeIntlLocaleStore)
  const setActiveIntlLocale = useActions(setActiveIntlLocaleAction)

  const onLanguageChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newActiveIntlLocale = event.target.value
      setActiveIntlLocale(newActiveIntlLocale)
    },
    [setActiveIntlLocale]
  )

  return (
    <TextField {...textFieldProps} value={activeIntlLocale} select onChange={onLanguageChange}>
      <MenuItem value={IntlLocale.RU}>Русский</MenuItem>
      <MenuItem value={IntlLocale.EN}>English</MenuItem>
    </TextField>
  )
}
