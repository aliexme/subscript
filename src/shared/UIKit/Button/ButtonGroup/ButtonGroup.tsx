import React from 'react'
import MuiButtonGroup from '@mui/material/ButtonGroup'
import type {
  ButtonGroupProps as MuiButtonGroupProps,
  ButtonGroupTypeMap as MuiButtonGroupTypeMap,
} from '@mui/material/ButtonGroup'

export type ButtonGroupProps<
  C extends React.ElementType = MuiButtonGroupTypeMap['defaultComponent']
> = MuiButtonGroupProps<
  C,
  {
    component?: C
  }
>

export const ButtonGroup = <C extends React.ElementType>(props: React.PropsWithChildren<ButtonGroupProps<C>>) => {
  const { ...muiButtonGroupProps } = props

  return <MuiButtonGroup {...muiButtonGroupProps} />
}
