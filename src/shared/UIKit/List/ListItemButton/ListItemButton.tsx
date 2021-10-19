import React from 'react'
import MuiListItemButton from '@mui/material/ListItemButton'
import type {
  ListItemButtonProps as MuiListItemButtonProps,
  ListItemButtonTypeMap as MuiListItemButtonTypeMap,
} from '@mui/material/ListItemButton'

export type ListItemButtonProps<
  C extends React.ElementType = MuiListItemButtonTypeMap['defaultComponent']
> = MuiListItemButtonProps<
  C,
  {
    component?: C
  }
>

export const ListItemButton = <C extends React.ElementType>(props: React.PropsWithChildren<ListItemButtonProps<C>>) => {
  const { ...muiListItemButtonProps } = props

  return <MuiListItemButton {...muiListItemButtonProps} />
}
