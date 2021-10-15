import { Module, provide } from '@tramvai/core'
import { ROUTER_SPA_ACTIONS_RUN_MODE_TOKEN, ROUTES_TOKEN, SpaRouterModule } from '@tramvai/module-router'

import { Bundles } from 'bundles'

import { Pages, PagesPath } from 'pages'

@Module({
  imports: [SpaRouterModule],
  providers: [
    provide({
      provide: ROUTER_SPA_ACTIONS_RUN_MODE_TOKEN,
      useValue: 'before',
    }),
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
  ],
})
export class AppRoutingModule {}
