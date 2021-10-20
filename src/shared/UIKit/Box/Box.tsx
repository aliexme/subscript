import React from 'react'
import MuiBox from '@mui/material/Box'
import type { BoxProps as MuiBoxProps, BoxTypeMap as MuiBoxTypeMap } from '@mui/material/Box'

export type BoxProps<C extends React.ElementType = MuiBoxTypeMap['defaultComponent']> = MuiBoxProps<
  C,
  {
    component?: C
  }
>

export const Box = <C extends React.ElementType>(props: React.PropsWithChildren<BoxProps<C>>) => {
  const { ...muiBoxProps } = props

  return <MuiBox {...muiBoxProps} />
}
