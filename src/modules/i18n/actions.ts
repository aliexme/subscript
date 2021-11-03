import { createAction } from '@tramvai/core'

import { setActiveIntlLocale } from './stores'

export const setActiveIntlLocaleAction = createAction({
  name: 'setActiveIntlLocaleAction',
  fn: (context, locale: string) => {
    context.dispatch(setActiveIntlLocale(locale))
  },
})
