import React from 'react'
import MuiCard from '@mui/material/Card'
import type { CardProps as MuiCardProps, CardTypeMap as MuiCardTypeMap } from '@mui/material/Card'

export type CardProps<C extends React.ElementType = MuiCardTypeMap['defaultComponent']> = MuiCardProps<
  C,
  {
    component?: C
  }
>

export const Card = <C extends React.ElementType>(props: React.PropsWithChildren<CardProps<C>>) => {
  const { ...muiCardProps } = props

  return <MuiCard {...muiCardProps} />
}
