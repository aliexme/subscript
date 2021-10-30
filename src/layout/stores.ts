import { createEvent, createReducer } from '@tramvai/state'

export const setAsideNavMenuOpen = createEvent<boolean>('set aside nav menu open')
export const openAsideNavMenu = createEvent('open aside nav menu')
export const closeAsideNavMenu = createEvent('close aside nav menu')

export const asideNavMenuOpenStore = createReducer<boolean>('asideNavMenuOpen', false)
  .on(setAsideNavMenuOpen, (_state, open) => open)
  .on(openAsideNavMenu, () => true)
  .on(closeAsideNavMenu, () => false)
