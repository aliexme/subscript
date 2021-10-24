import { filterUndefinedObjectValues } from 'shared/utils/objects'

export type ThemeColors = {
  primary: string
  primaryLight?: string
  primaryDark?: string
  primaryContrastText?: string
  secondary: string
  secondaryLight?: string
  secondaryDark?: string
  secondaryContrastText?: string
  error: string
  errorLight?: string
  errorDark?: string
  errorContrastText?: string
  warning: string
  warningLight?: string
  warningDark?: string
  warningContrastText?: string
  info: string
  infoLight?: string
  infoDark?: string
  infoContrastText?: string
  success: string
  successLight?: string
  successDark?: string
  successContrastText?: string
  primaryText: string
  secondaryText: string
  disabledText: string
  primaryBackground: string
  secondaryBackground: string
}

export type ThemeColorsOptions = Partial<ThemeColors>

const DEFAULT_THEME_COLORS: ThemeColors = {
  primary: '#1976d2',
  secondary: '#9c27b0',
  error: '#d32f2f',
  warning: '#ed6c02',
  info: '#0288d1',
  success: '#2e7d32',
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
