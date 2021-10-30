import React, { useCallback } from 'react'
import { useActions, useStore } from '@tramvai/state'

import { activeThemeNameStore, setActiveThemeNameAction } from 'modules/theming'
import { ThemeToggleButtonGroup } from 'entities/theming'
import type { ThemeToggleButtonGroupProps } from 'entities/theming'

export type SelectActiveThemeButtonGroupProps = ThemeToggleButtonGroupProps

export const SelectActiveThemeButtonGroup: React.FC<SelectActiveThemeButtonGroupProps> = (props) => {
  const { ...themeToggleButtonGroupProps } = props

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
    <ThemeToggleButtonGroup
      {...themeToggleButtonGroupProps}
      value={activeThemeName}
      exclusive
      onChange={onThemeChange}
    />
  )
}
