import type { ExtendedModule, ModuleType } from '@tramvai/core'
import { CommonModule } from '@tramvai/module-common'
import { ErrorInterceptorModule } from '@tramvai/module-error-interceptor'
import { SeoModule } from '@tramvai/module-seo'
import { ServerModule } from '@tramvai/module-server'

import { AppRenderingModule } from './rendering'
import { AppRoutingModule } from './routing'
import { AppThemingModule } from './theming'
import { AppIntlModule } from './intl'

export const appModules: (ModuleType | ExtendedModule)[] = [
  CommonModule,
  AppRenderingModule,
  AppRoutingModule,
  AppThemingModule,
  AppIntlModule,
  SeoModule,
  ServerModule,
  ErrorInterceptorModule,
]
