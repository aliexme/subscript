import React from 'react'
import MuiDrawer from '@mui/material/Drawer'
import type { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer'

export type DrawerProps = MuiDrawerProps

export const Drawer: React.FC<DrawerProps> = (props) => {
  const { ...muiDrawerProps } = props

  return <MuiDrawer {...muiDrawerProps} />
}
