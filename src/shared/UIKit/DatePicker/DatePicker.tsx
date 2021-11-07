import React from 'react'
import { useStore } from '@tramvai/state'
import MuiDatePicker from '@mui/lab/DatePicker'
import type { DatePickerProps as MuiDatePickerProps } from '@mui/lab/DatePicker'

import { activeIntlLocaleStore } from 'modules/i18n'
import type { IntlLocale } from 'shared/lib/i18n'
import { DATE_PICKER_MASK_MAP } from 'shared/lib/mui'
import type { PartialProp } from 'shared/utils/ts'

import { TextField } from '../TextField'

export type DatePickerProps = PartialProp<MuiDatePickerProps<Date>, 'renderInput'>

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { ...muiDatePickerProps } = props

  const locale = useStore(activeIntlLocaleStore) as IntlLocale

  return (
    <MuiDatePicker
      mask={DATE_PICKER_MASK_MAP[locale]}
      renderInput={(inputProps) => <TextField {...inputProps} />}
      {...muiDatePickerProps}
    />
  )
}
