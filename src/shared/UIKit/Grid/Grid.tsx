import React from 'react'
import MuiGrid from '@mui/material/Grid'
import type { GridProps as MuiGridProps, GridTypeMap as MuiGridTypeMap } from '@mui/material/Grid'

export type GridProps<C extends React.ElementType = MuiGridTypeMap['defaultComponent']> = MuiGridProps<
  C,
  {
    component?: C
  }
>

export const Grid = <C extends React.ElementType>(props: React.PropsWithChildren<GridProps<C>>) => {
  const { ...muiGridProps } = props

  return <MuiGrid {...muiGridProps} />
}
