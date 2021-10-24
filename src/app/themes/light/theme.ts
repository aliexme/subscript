import { createTheme } from 'modules/theming'

import { commonThemeShape } from '../common'
import { lightThemeColors } from './colors'

export const LIGHT_THEME_NAME = 'light'

export const lightTheme = createTheme({
  name: LIGHT_THEME_NAME,
  colors: lightThemeColors,
  shape: commonThemeShape,
})
