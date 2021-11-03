import createPalette from '@mui/material/styles/createPalette'

import type { Theme } from 'modules/theming'
import { filterUndefinedObjectValues } from 'shared/utils/objects'

import { DARK_THEME_NAME } from '../../../app/themes'

export const createMuiPalette = (theme: Theme) => {
  const isDarkMode = [DARK_THEME_NAME].includes(theme.name)

  return createPalette({
    mode: isDarkMode ? 'dark' : 'light',
    primary: filterUndefinedObjectValues({
      main: theme.colors.primary,
      light: theme.colors.primaryLight,
      dark: theme.colors.primaryDark,
      contrastText: theme.colors.primaryContrastText,
    }),
    secondary: filterUndefinedObjectValues({
      main: theme.colors.secondary,
      light: theme.colors.secondaryLight,
      dark: theme.colors.secondaryDark,
      contrastText: theme.colors.secondaryContrastText,
    }),
    error: filterUndefinedObjectValues({
      main: theme.colors.error,
      light: theme.colors.errorLight,
      dark: theme.colors.errorDark,
      contrastText: theme.colors.errorContrastText,
    }),
    warning: filterUndefinedObjectValues({
      main: theme.colors.warning,
      light: theme.colors.warningLight,
      dark: theme.colors.warningDark,
      contrastText: theme.colors.warningContrastText,
    }),
    info: filterUndefinedObjectValues({
      main: theme.colors.info,
      light: theme.colors.infoLight,
      dark: theme.colors.infoDark,
      contrastText: theme.colors.infoContrastText,
    }),
    success: filterUndefinedObjectValues({
      main: theme.colors.success,
      light: theme.colors.successLight,
      dark: theme.colors.successDark,
      contrastText: theme.colors.successContrastText,
    }),
    text: filterUndefinedObjectValues({
      primary: theme.colors.primaryText,
      secondary: theme.colors.secondaryText,
      disabled: theme.colors.disabledText,
    }),
    background: filterUndefinedObjectValues({
      default: theme.colors.primaryBackground,
      paper: theme.colors.secondaryBackground,
    }),
  })
}
