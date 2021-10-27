import React from 'react'
import type { DividerProps as MuiDividerProps, DividerTypeMap as MuiDividerTypeMap } from '@mui/material/Divider'

import { StyledMuiDivider } from './styled'
import type { StyledDividerProps } from './styled'

export type DividerProps<C extends React.ElementType = MuiDividerTypeMap['defaultComponent']> = MuiDividerProps<
  C,
  StyledDividerProps & {
    component?: C
  }
>

export const Divider = <C extends React.ElementType>(props: React.PropsWithChildren<DividerProps<C>>) => {
  const { ...muiDividerProps } = props

  return <StyledMuiDivider {...muiDividerProps} />
}
