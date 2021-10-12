import { Module } from '@tramvai/core'
import { SpaRouterModule } from '@tramvai/module-router'

import { routeProviders } from './providers'

@Module({
  imports: [SpaRouterModule],
  providers: routeProviders,
})
export class RoutingModule {}
