import React from 'react'
import MuiToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import type { ToggleButtonGroupProps as MuiToggleButtonGroupProps } from '@mui/material/ToggleButtonGroup'

export type ToggleButtonGroupProps = MuiToggleButtonGroupProps

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = (props) => {
  const { ...muiToggleButtonGroupProps } = props

  return <MuiToggleButtonGroup {...muiToggleButtonGroupProps} />
}
