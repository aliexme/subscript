import { filterUndefinedObjectValues } from 'shared/utils/objects'

export type ThemeColors = {
  primary: string
  primaryLight: string
  primaryDark: string
  primaryContrastText: string
  secondary: string
  secondaryLight: string
  secondaryDark: string
  secondaryContrastText: string
  error: string
  errorLight: string
  errorDark: string
  errorContrastText: string
  warning: string
  warningLight: string
  warningDark: string
  warningContrastText: string
  info: string
  infoLight: string
  infoDark: string
  infoContrastText: string
  success: string
  successLight: string
  successDark: string
  successContrastText: string
  primaryText: string
  secondaryText: string
  disabledText: string
  primaryBackground: string
  secondaryBackground: string
}

export type ThemeColorsOptions = Partial<ThemeColors>

const DEFAULT_THEME_COLORS: ThemeColors = {
  primary: '#1976d2',
  primaryLight: '#42a5f5',
  primaryDark: '#1565c0',
  primaryContrastText: '#ffffff',
  secondary: '#9c27b0',
  secondaryLight: '#ba68c8',
  secondaryDark: '#7b1fa2',
  secondaryContrastText: '#ffffff',
  error: '#d32f2f',
  errorLight: '#ef5350',
  errorDark: '#c62828',
  errorContrastText: '#ffffff',
  warning: '#ED6C02',
  warningLight: '#ff9800',
  warningDark: '#e65100',
  warningContrastText: '#ffffff',
  info: '#0288d1',
  infoLight: '#03a9f4',
  infoDark: '#01579b',
  infoContrastText: '#ffffff',
  success: '#2e7d32',
  successLight: '#4caf50',
  successDark: '#1b5e20',
  successContrastText: '#ffffff',
  primaryText: 'rgba(0, 0, 0, 0.87)',
  secondaryText: 'rgba(0, 0, 0, 0.6)',
  disabledText: 'rgba(0, 0, 0, 0.38)',
  primaryBackground: '#ffffff',
  secondaryBackground: '#ffffff',
}

export const createThemeColors = (colors: ThemeColorsOptions = {}): ThemeColors => {
  return {
    ...DEFAULT_THEME_COLORS,
    ...filterUndefinedObjectValues(colors),
  }
}
