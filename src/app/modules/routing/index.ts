import { Module, provide } from '@tramvai/core'
import { ROUTER_SPA_ACTIONS_RUN_MODE_TOKEN, SpaRouterModule } from '@tramvai/module-router'

import { pageProviders } from './pages'

@Module({
  imports: [SpaRouterModule],
  providers: [
    provide({
      provide: ROUTER_SPA_ACTIONS_RUN_MODE_TOKEN,
      useValue: 'before',
    }),
    ...pageProviders,
  ],
})
export class AppRoutingModule {}
