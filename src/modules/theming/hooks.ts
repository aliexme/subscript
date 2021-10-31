import { useStore } from '@tramvai/state'
import { useDi } from '@tramvai/react'

import type { Theme } from './theme'
import { THEMES_TOKEN } from './tokens'
import { activeThemeNameStore } from './stores'
import { defaultTheme } from './themes'

export const useTheme = (): Theme => {
  const activeThemeName = useStore(activeThemeNameStore)
  const themes = useDi(THEMES_TOKEN) as Theme[]
  return themes.find((theme) => theme.name === activeThemeName) ?? defaultTheme
}
