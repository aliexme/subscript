import { Module } from '@tramvai/core'

import { commonProviders } from './providers'

export * from './exports'

@Module({
  imports: [],
  providers: [...commonProviders],
})
export class ThemingModule {}
