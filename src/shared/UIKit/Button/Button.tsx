import React from 'react'
import MuiButton from '@mui/material/Button'
import type { ButtonProps as MuiButtonProps, ButtonTypeMap as MuiButtonTypeMap } from '@mui/material/Button'

export type ButtonProps<C extends React.ElementType = MuiButtonTypeMap['defaultComponent']> = MuiButtonProps<
  C,
  {
    component?: C
  }
>

export const Button = <C extends React.ElementType>(props: React.PropsWithChildren<ButtonProps<C>>) => {
  const { ...muiButtonProps } = props

  return <MuiButton {...muiButtonProps} />
}
