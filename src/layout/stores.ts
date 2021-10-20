import { createEvent, createReducer } from '@tramvai/state'

export const setAsideMenuOpen = createEvent<boolean>('set aside menu open')

export const asideMenuOpenReducer = createReducer<boolean>('asideMenuOpen', false).on(
  setAsideMenuOpen,
  (_state, open) => open
)
