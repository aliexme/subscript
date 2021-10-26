import { Module, provide } from '@tramvai/core'
import { LOGGER_TOKEN } from '@tramvai/module-common'

import { LOCAL_STORAGE_SERVICE_TOKEN } from './tokens'
import { ClientLocalStorageService } from './service/ClientLocalStorageService'

export * from './index'

@Module({
  imports: [],
  providers: [
    provide({
      provide: LOCAL_STORAGE_SERVICE_TOKEN,
      useClass: ClientLocalStorageService,
      deps: {
        logger: LOGGER_TOKEN,
      },
    }),
  ],
})
export class LocalStorageModule {}
