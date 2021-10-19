import { createAction } from '@tramvai/core'

import { setAsideMenuOpen } from './stores'

export const setAsideMenuOpenAction = createAction({
  name: 'setAsideMenuOpenAction',
  fn: (context, open: boolean) => {
    context.dispatch(setAsideMenuOpen(open))
  },
})
