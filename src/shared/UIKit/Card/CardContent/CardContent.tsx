import React from 'react'
import MuiCardContent from '@mui/material/CardContent'
import type {
  CardContentProps as MuiCardContentProps,
  CardContentTypeMap as MuiCardContentTypeMap,
} from '@mui/material/CardContent'

export type CardContentProps<
  C extends React.ElementType = MuiCardContentTypeMap['defaultComponent']
> = MuiCardContentProps<
  C,
  {
    component?: C
  }
>

export const CardContent = <C extends React.ElementType>(props: React.PropsWithChildren<CardContentProps<C>>) => {
  const { ...muiCardContentProps } = props

  return <MuiCardContent {...muiCardContentProps} />
}
