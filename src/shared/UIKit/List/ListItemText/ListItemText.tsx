import React from 'react'
import MuiListItemText from '@mui/material/ListItemText'
import type { ListItemTextProps as MuiListItemTextProps } from '@mui/material/ListItemText'

export type ListItemTextProps<
  PrimaryTypographyComponent extends React.ElementType = 'span',
  SecondaryTypographyComponent extends React.ElementType = 'p'
> = MuiListItemTextProps<PrimaryTypographyComponent, SecondaryTypographyComponent>

export const ListItemText = <
  PrimaryTypographyComponent extends React.ElementType,
  SecondaryTypographyComponent extends React.ElementType
>(
  props: React.PropsWithChildren<ListItemTextProps<PrimaryTypographyComponent, SecondaryTypographyComponent>>
) => {
  const { ...muiListItemProps } = props

  return <MuiListItemText {...muiListItemProps} />
}
