import { createEvent, createReducer } from '@tramvai/state'

export const setAsideMenuOpen = createEvent<boolean>('set aside menu open')
export const openAsideMenu = createEvent('open aside menu')
export const closeAsideMenu = createEvent('close aside menu')

export const asideMenuOpenReducer = createReducer<boolean>('asideMenuOpen', false)
  .on(setAsideMenuOpen, (_state, open) => open)
  .on(openAsideMenu, () => true)
  .on(closeAsideMenu, () => false)
