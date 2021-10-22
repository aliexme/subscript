import { createThemeColors } from './colors'
import type { ThemeColors, ThemeColorsOptions } from './colors'
import { createThemeShape } from './shape'
import type { ThemeShape, ThemeShapeOptions } from './shape'

export type Theme = {
  name: string
  colors: ThemeColors
  shape: ThemeShape
}

export type ThemeOptions = {
  name: string
  colors?: ThemeColorsOptions
  shape?: ThemeShapeOptions
}

export const createTheme = (theme: ThemeOptions): Theme => {
  return {
    name: theme.name,
    colors: createThemeColors(theme.colors),
    shape: createThemeShape(theme.shape),
  }
}
