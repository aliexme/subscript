import { Module, provide } from '@tramvai/core'

import { LOCAL_STORAGE_SERVICE_TOKEN } from './tokens'
import { ServerLocalStorageService } from './service/ServerLocalStorageService'

export * from './index'

@Module({
  imports: [],
  providers: [
    provide({
      provide: LOCAL_STORAGE_SERVICE_TOKEN,
      useClass: ServerLocalStorageService,
    }),
  ],
})
export class LocalStorageModule {}
