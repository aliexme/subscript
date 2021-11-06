import React from 'react'
import MuiFormLabel from '@mui/material/FormLabel'
import type {
  FormLabelProps as MuiFormLabelProps,
  FormLabelTypeMap as MuiFormLabelTypeMap,
} from '@mui/material/FormLabel'

export type FormLabelProps<C extends React.ElementType = MuiFormLabelTypeMap['defaultComponent']> = MuiFormLabelProps<
  C,
  {
    component?: C
  }
>

export const FormLabel = <C extends React.ElementType>(props: React.PropsWithChildren<FormLabelProps<C>>) => {
  const { ...muiFormLabelProps } = props

  return <MuiFormLabel {...muiFormLabelProps} />
}
