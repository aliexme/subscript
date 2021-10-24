import React from 'react'
import type {
  ToggleButtonProps as MuiToggleButtonProps,
  ToggleButtonTypeMap as MuiToggleButtonTypeMap,
} from '@mui/material/ToggleButton'

import { StyledMuiToggleButton } from './styled'

export type ToggleButtonProps<
  C extends React.ElementType = MuiToggleButtonTypeMap['defaultComponent']
> = MuiToggleButtonProps<
  C,
  {
    component?: C
  }
>

export const ToggleButton = <C extends React.ElementType>(props: React.PropsWithChildren<ToggleButtonProps<C>>) => {
  const { ...muiToggleButtonProps } = props

  return <StyledMuiToggleButton {...muiToggleButtonProps} />
}
