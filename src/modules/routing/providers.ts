import type { Provider } from '@tramvai/core'
import { provide } from '@tramvai/core'
import type { Route } from '@tinkoff/router'
import { ROUTES_TOKEN } from '@tramvai/tokens-router'

export const routeProviders: Provider<Route>[] = [
  provide({
    provide: ROUTES_TOKEN,
    multi: true,
    useValue: {
      name: 'main',
      path: '/',
    },
  }),
  provide({
    provide: ROUTES_TOKEN,
    multi: true,
    useValue: {
      name: 'second',
      path: '/second/',
      config: {
        pageComponent: 'subscript/second',
      },
    },
  }),
]
