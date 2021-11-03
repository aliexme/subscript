import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { FormattedMessage } from 'react-intl'

import { IntlTranslation } from 'shared/lib/i18n'
import { darkTheme, lightTheme } from 'shared/lib/theming'
import { ToggleButton, ToggleButtonGroup } from 'shared/UIKit/Button'
import type { ToggleButtonGroupProps } from 'shared/UIKit/Button'

export type ThemeToggleButtonGroupProps = ToggleButtonGroupProps

export const ThemeToggleButtonGroup: React.FC<ThemeToggleButtonGroupProps> = (props) => {
  const { ...toggleButtonGroupProps } = props

  return (
    <ToggleButtonGroup color="primary" {...toggleButtonGroupProps}>
      <ToggleButton value={lightTheme.name}>
        <LightModeIcon fontSize="small" />
        <FormattedMessage id={IntlTranslation.LightThemeName} />
      </ToggleButton>
      <ToggleButton value={darkTheme.name}>
        <DarkModeIcon fontSize="small" />
        <FormattedMessage id={IntlTranslation.DarkThemeName} />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
