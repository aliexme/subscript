import React from 'react'
import MuiListItem from '@mui/material/ListItem'
import type { ListItemProps as MuiListItemProps } from '@mui/material/ListItem'

export type ListItemProps<C extends React.ElementType = 'li'> = MuiListItemProps<
  C,
  {
    component?: C
  }
>

export const ListItem = <C extends React.ElementType>(props: React.PropsWithChildren<ListItemProps<C>>) => {
  const { ...muiListItemProps } = props

  return <MuiListItem {...muiListItemProps} />
}
