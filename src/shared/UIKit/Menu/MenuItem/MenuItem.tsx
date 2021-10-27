import React from 'react'
import MuiMenuItem from '@mui/material/MenuItem'
import type { MenuItemProps as MuiMenuItemProps, MenuItemTypeMap as MuiMenuItemTypeMap } from '@mui/material/MenuItem'

export type MenuItemProps<C extends React.ElementType = MuiMenuItemTypeMap['defaultComponent']> = MuiMenuItemProps<
  C,
  {
    component?: C
  }
>

export const MenuItem = <C extends React.ElementType>(props: React.PropsWithChildren<MenuItemProps<C>>) => {
  const { ...muiMenuItemProps } = props

  return <MuiMenuItem {...muiMenuItemProps} />
}
