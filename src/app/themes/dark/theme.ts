import { createTheme } from 'modules/theming'

import { darkThemeColors } from './colors'

export const DARK_THEME_NAME = 'dark'

export const darkTheme = createTheme({
  name: DARK_THEME_NAME,
  colors: darkThemeColors,
})
