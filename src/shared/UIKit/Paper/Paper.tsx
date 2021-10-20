import React from 'react'
import MuiPaper from '@mui/material/Paper'
import type { PaperProps as MuiPaperProps, PaperTypeMap as MuiPaperTypeMap } from '@mui/material/Paper'

export type PaperProps<C extends React.ElementType = MuiPaperTypeMap['defaultComponent']> = MuiPaperProps<
  C,
  {
    component?: C
  }
>

export const Paper = <C extends React.ElementType>(props: React.PropsWithChildren<PaperProps<C>>) => {
  const { ...muiPaperProps } = props

  return <MuiPaper {...muiPaperProps} />
}
