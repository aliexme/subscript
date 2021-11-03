import React from 'react'

import { IntlLocale } from 'shared/lib/i18n'
import { TextField } from 'shared/UIKit/TextField'
import type { TextFieldProps } from 'shared/UIKit/TextField'
import { MenuItem } from 'shared/UIKit/Menu'

export type LanguageSelectProps = TextFieldProps

export const LanguageSelect: React.FC<LanguageSelectProps> = (props) => {
  const { ...textFieldProps } = props

  return (
    <TextField {...textFieldProps} select>
      <MenuItem value={IntlLocale.RU}>Русский</MenuItem>
      <MenuItem value={IntlLocale.EN}>English</MenuItem>
    </TextField>
  )
}
