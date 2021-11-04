import React, { useCallback } from 'react'
import { useActions, useStore } from '@tramvai/state'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { FormattedMessage } from 'react-intl'

import { activeThemeNameStore, setActiveThemeNameAction } from 'modules/theming'
import { IntlTranslation } from 'shared/lib/i18n'
import { darkTheme, lightTheme } from 'shared/lib/theming'
import { ToggleButton, ToggleButtonGroup } from 'shared/UIKit/Button'
import type { ToggleButtonGroupProps } from 'shared/UIKit/Button'

export type SelectActiveThemeButtonGroupProps = ToggleButtonGroupProps

export const SelectActiveThemeButtonGroup: React.FC<SelectActiveThemeButtonGroupProps> = (props) => {
  const { ...toggleButtonGroupProps } = props

  const activeThemeName = useStore(activeThemeNameStore)
  const setActiveThemeName = useActions(setActiveThemeNameAction)

  const onThemeChange = useCallback(
    (_event: React.MouseEvent<HTMLElement>, themeName: string | null) => {
      if (themeName === null) {
        return
      }

      setActiveThemeName(themeName)
    },
    [setActiveThemeName]
  )

  return (
    <ToggleButtonGroup
      color="primary"
      {...toggleButtonGroupProps}
      value={activeThemeName}
      exclusive
      onChange={onThemeChange}
    >
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
