import React from 'react'
import MuiListItemIcon from '@mui/material/ListItemIcon'
import type { ListItemIconProps as MuiListItemIconProps } from '@mui/material/ListItemIcon'

export type ListItemIconProps = MuiListItemIconProps

export const ListItemIcon: React.FC<ListItemIconProps> = (props) => {
  const { ...muiListItemIconProps } = props

  return <MuiListItemIcon {...muiListItemIconProps} />
}
