import React from 'react'
import MuiMenu from '@mui/material/Menu'
import type { MenuProps as MuiMenuProps } from '@mui/material/Menu'

export type MenuProps = MuiMenuProps

export const Menu = (props: React.PropsWithChildren<MenuProps>) => {
  const { ...muiMenuProps } = props

  return <MuiMenu {...muiMenuProps} />
}
