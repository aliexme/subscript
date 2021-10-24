import React from 'react'
import type { AppBarProps as MuiAppBarProps, AppBarTypeMap as MuiAppBarTypeMap } from '@mui/material/AppBar'

import { StyledMuiAppBar } from './styled'
import type { StyledAppBarProps } from './styled'

export type AppBarProps<C extends React.ElementType = MuiAppBarTypeMap['defaultComponent']> = MuiAppBarProps<
  C,
  StyledAppBarProps & {
    component?: C
  }
>

export const AppBar = <C extends React.ElementType>(props: React.PropsWithChildren<AppBarProps<C>>) => {
  const { ...muiAppBarProps } = props

  return <StyledMuiAppBar {...muiAppBarProps} />
}
