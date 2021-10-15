import type { ThemeColors, ThemeColorsOptions } from './colors'
import { createThemeColors } from './colors'

export type Theme = {
  name: string
  colors: ThemeColors
}

export type ThemeOptions = {
  name: string
  colors?: ThemeColorsOptions
}

export const createTheme = (theme: ThemeOptions): Theme => {
  return {
    name: theme.name,
    colors: createThemeColors(theme.colors),
  }
}
