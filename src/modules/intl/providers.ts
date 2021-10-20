import { commandLineListTokens, provide } from '@tramvai/core'
import { COMBINE_REDUCERS, STORE_TOKEN } from '@tramvai/module-common'
import { LAYOUT_OPTIONS } from '@tramvai/module-render'
import type { Provider } from '@tinkoff/dippy'

import { DEFAULT_INTL_LOCALE_TOKEN, INTL_MESSAGES_TOKEN } from './tokens'
import { activeIntlLocaleReducer, setActiveIntlLocale } from './stores'
import { layoutWrapper } from './LayoutWrapper'

export const commonProviders: Provider[] = [
  provide({
    provide: INTL_MESSAGES_TOKEN,
    multi: true,
    useValue: {},
  }),
  provide({
    provide: DEFAULT_INTL_LOCALE_TOKEN,
    useValue: 'en',
  }),
  provide({
    provide: COMBINE_REDUCERS,
    multi: true,
    useValue: activeIntlLocaleReducer,
  }),
  provide({
    provide: LAYOUT_OPTIONS,
    multi: true,
    useValue: [
      {
        wrappers: {
          layout: layoutWrapper,
        },
      },
    ],
  }),
  provide({
    provide: commandLineListTokens.resolveUserDeps,
    multi: true,
    useFactory: ({ store, defaultIntlLocale }) => {
      return () => {
        store.dispatch(setActiveIntlLocale(defaultIntlLocale))
      }
    },
    deps: {
      store: STORE_TOKEN,
      defaultIntlLocale: DEFAULT_INTL_LOCALE_TOKEN,
    },
  }),
]
