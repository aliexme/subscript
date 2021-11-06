import React from 'react'
import MuiFormHelperText from '@mui/material/FormHelperText'
import type {
  FormHelperTextProps as MuiFormHelperTextProps,
  FormHelperTextTypeMap as MuiFormHelperTextTypeMap,
} from '@mui/material/FormHelperText'

export type FormHelperTextProps<
  C extends React.ElementType = MuiFormHelperTextTypeMap['defaultComponent']
> = MuiFormHelperTextProps<
  C,
  {
    component?: C
  }
>

export const FormHelperText = <C extends React.ElementType>(props: React.PropsWithChildren<FormHelperTextProps<C>>) => {
  const { ...muiFormHelperText } = props

  return <MuiFormHelperText {...muiFormHelperText} />
}
