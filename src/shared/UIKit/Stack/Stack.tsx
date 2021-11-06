import React from 'react'
import MuiStack from '@mui/material/Stack'
import type { StackProps as MuiStackProps, StackTypeMap as MuiStackTypeMap } from '@mui/material/Stack'

export type StackProps<C extends React.ElementType = MuiStackTypeMap['defaultComponent']> = MuiStackProps<
  C,
  {
    component?: C
  }
>

export const Stack = <C extends React.ElementType>(props: React.PropsWithChildren<StackProps<C>>) => {
  const { ...muiStackProps } = props

  return <MuiStack {...muiStackProps} />
}
