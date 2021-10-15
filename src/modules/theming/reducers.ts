import { createEvent, createReducer } from '@tramvai/state'

import { DEFAULT_THEME_NAME } from './themes'

export const setActiveThemeName = createEvent<string>('set active theme name')

export const activeThemeNameReducer = createReducer<string>('activeThemeName', DEFAULT_THEME_NAME).on(
  setActiveThemeName,
  (_state, themeName) => themeName
)
