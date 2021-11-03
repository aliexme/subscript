import { createAction } from '@tramvai/core'

import { closeAsideNavMenu, openAsideNavMenu, setAsideNavMenuOpen } from './stores'

export const setAsideNavMenuOpenAction = createAction({
  name: 'setAsideNavMenuOpenAction',
  fn: (context, open: boolean) => {
    context.dispatch(setAsideNavMenuOpen(open))
  },
})

export const openAsideNavMenuAction = createAction({
  name: 'openAsideNavMenuAction',
  fn: (context) => {
    context.dispatch(openAsideNavMenu())
  },
})

export const closeAsideNavMenuAction = createAction({
  name: 'closeAsideNavMenuAction',
  fn: (context) => {
    context.dispatch(closeAsideNavMenu())
  },
})
