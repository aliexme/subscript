import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import { darkTheme, lightTheme } from 'app/themes'
import { ToggleButton, ToggleButtonGroup } from 'shared/UIKit/Button'
import type { ToggleButtonGroupProps } from 'shared/UIKit/Button'

export type ThemeToggleButtonGroupProps = ToggleButtonGroupProps

export const ThemeToggleButtonGroup: React.FC<ThemeToggleButtonGroupProps> = (props) => {
  const { ...toggleButtonGroupProps } = props

  return (
    <ToggleButtonGroup color="primary" {...toggleButtonGroupProps}>
      <ToggleButton value={lightTheme.name}>
        <LightModeIcon fontSize="small" />
        {lightTheme.name}
      </ToggleButton>
      <ToggleButton value={darkTheme.name}>
        <DarkModeIcon fontSize="small" />
        {darkTheme.name}
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
