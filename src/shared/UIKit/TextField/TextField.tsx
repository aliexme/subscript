import React from 'react'
import MuiTextField from '@mui/material/TextField'
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'

export type TextFieldProps = MuiTextFieldProps

export const TextField: React.FC<TextFieldProps> = (props) => {
  const { ...muiTextFieldProps } = props

  return <MuiTextField {...muiTextFieldProps} />
}
