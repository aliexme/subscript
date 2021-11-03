import { provide } from '@tramvai/core'
import { ROUTES_TOKEN } from '@tramvai/module-router'
import type { Provider } from '@tinkoff/dippy'

import { Bundles, Pages, PagesPath } from 'shared/lib/routing'

export const pageProviders: Provider[] = [
  provide({
    provide: ROUTES_TOKEN,
    multi: true,
    useValue: {
      name: Pages.MAIN,
      path: PagesPath.MAIN,
      config: {
        bundle: Bundles.MAIN,
        pageComponent: Pages.MAIN,
      },
    },
  }),
  provide({
    provide: ROUTES_TOKEN,
    multi: true,
    useValue: {
      name: Pages.SETTINGS,
      path: PagesPath.SETTINGS,
      config: {
        bundle: Bundles.MAIN,
        pageComponent: Pages.SETTINGS,
      },
    },
  }),
]
