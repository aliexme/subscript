import React from 'react'
import MuiList from '@mui/material/List'
import type { ListProps as MuiListProps, ListTypeMap as MuiListTypeMap } from '@mui/material/List'

export type ListProps<C extends React.ElementType = MuiListTypeMap['defaultComponent']> = MuiListProps<
  C,
  {
    component?: C
  }
>

export const List = <C extends React.ElementType>(props: React.PropsWithChildren<ListProps<C>>) => {
  const { ...muiListProps } = props

  return <MuiList {...muiListProps} />
}
