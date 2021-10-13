import type { ExtendedModule, ModuleType } from '@tramvai/core'
import { CommonModule } from '@tramvai/module-common'
import { ErrorInterceptorModule } from '@tramvai/module-error-interceptor'
import { SeoModule } from '@tramvai/module-seo'
import { ServerModule } from '@tramvai/module-server'

import { AppRenderingModule } from './rendering'
import { AppRoutingModule } from './routing'

export const appModules: (ModuleType | ExtendedModule)[] = [
  CommonModule,
  AppRenderingModule,
  AppRoutingModule,
  SeoModule,
  ServerModule,
  ErrorInterceptorModule,
]
