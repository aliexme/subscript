import { createAction } from '@tramvai/core'

import { closeAsideMenu, openAsideMenu, setAsideMenuOpen } from './stores'

export const setAsideMenuOpenAction = createAction({
  name: 'setAsideMenuOpenAction',
  fn: (context, open: boolean) => {
    context.dispatch(setAsideMenuOpen(open))
  },
})

export const openAsideMenuAction = createAction({
  name: 'openAsideMenuAction',
  fn: (context) => {
    context.dispatch(openAsideMenu())
  },
})

export const closeAsideMenuAction = createAction({
  name: 'closeAsideMenuAction',
  fn: (context) => {
    context.dispatch(closeAsideMenu())
  },
})
