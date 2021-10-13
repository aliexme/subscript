import { Module, provide } from '@tramvai/core'
import { ROUTES_TOKEN, SpaRouterModule } from '@tramvai/module-router'

import { Bundles } from 'bundles'

import { Pages, PagesPath } from 'pages'

@Module({
  imports: [SpaRouterModule],
  providers: [
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
        name: Pages.SECOND,
        path: PagesPath.SECOND,
        config: {
          bundle: Bundles.MAIN,
          pageComponent: Pages.SECOND,
        },
      },
    }),
  ],
})
export class AppRoutingModule {}
