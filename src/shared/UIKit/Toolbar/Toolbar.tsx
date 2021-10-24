import React from 'react'
import MuiToolbar from '@mui/material/Toolbar'
import type { ToolbarProps as MuiToolbarProps, ToolbarTypeMap as MuiToolbarTypeMap } from '@mui/material/Toolbar'

export type ToolbarProps<C extends React.ElementType = MuiToolbarTypeMap['defaultComponent']> = MuiToolbarProps<
  C,
  {
    component?: C
  }
>

export const Toolbar = <C extends React.ElementType>(props: React.PropsWithChildren<ToolbarProps<C>>) => {
  const { ...muiToolbarProps } = props

  return <MuiToolbar {...muiToolbarProps} />
}
