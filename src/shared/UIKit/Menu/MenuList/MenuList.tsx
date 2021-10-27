import React from 'react'
import MuiMenuList from '@mui/material/MenuList'
import type { MenuListProps as MuiMenuListProps } from '@mui/material/MenuList'

export type MenuListProps = MuiMenuListProps

export const MenuList = (props: React.PropsWithChildren<MenuListProps>) => {
  const { ...muiMenuListProps } = props

  return <MuiMenuList {...muiMenuListProps} />
}
