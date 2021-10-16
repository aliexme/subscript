import createPalette from '@mui/material/styles/createPalette'

import type { Theme } from 'modules/theming'

import { DARK_THEME_NAME } from '../themes'

export const createMuiPalette = (theme: Theme) => {
  const isDarkMode = [DARK_THEME_NAME].includes(theme.name)

  return createPalette({
    mode: isDarkMode ? 'dark' : 'light',
    primary: {
      main: theme.colors.primary,
      light: theme.colors.primaryLight,
      dark: theme.colors.primaryDark,
      contrastText: theme.colors.primaryContrastText,
    },
    secondary: {
      main: theme.colors.secondary,
      light: theme.colors.secondaryLight,
      dark: theme.colors.secondaryDark,
      contrastText: theme.colors.secondaryContrastText,
    },
    error: {
      main: theme.colors.error,
      light: theme.colors.errorLight,
      dark: theme.colors.errorDark,
      contrastText: theme.colors.errorContrastText,
    },
    warning: {
      main: theme.colors.warning,
      light: theme.colors.warningLight,
      dark: theme.colors.warningDark,
      contrastText: theme.colors.warningContrastText,
    },
    info: {
      main: theme.colors.info,
      light: theme.colors.infoLight,
      dark: theme.colors.infoDark,
      contrastText: theme.colors.infoContrastText,
    },
    success: {
      main: theme.colors.success,
      light: theme.colors.successLight,
      dark: theme.colors.successDark,
      contrastText: theme.colors.successContrastText,
    },
    text: {
      primary: theme.colors.primaryText,
      secondary: theme.colors.secondaryText,
      disabled: theme.colors.disabledText,
    },
    background: {
      default: theme.colors.primaryBackground,
      paper: theme.colors.secondaryBackground,
    },
  })
}
