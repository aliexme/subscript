import { Module } from '@tramvai/core'

import { commonProviders } from './providers'

export * from './index'

@Module({
  imports: [],
  providers: [...commonProviders],
})
export class ModalsModule {}
