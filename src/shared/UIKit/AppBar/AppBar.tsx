import React from 'react'
import MuiAppBar from '@mui/material/AppBar'
import type { AppBarProps as MuiAppBarProps, AppBarTypeMap as MuiAppBarTypeMap } from '@mui/material/AppBar'

export type AppBarProps<C extends React.ElementType = MuiAppBarTypeMap['defaultComponent']> = MuiAppBarProps<
  C,
  {
    component?: C
  }
>

export const AppBar = <C extends React.ElementType>(props: React.PropsWithChildren<AppBarProps<C>>) => {
  const { ...muiAppBarProps } = props

  return <MuiAppBar {...muiAppBarProps} />
}
