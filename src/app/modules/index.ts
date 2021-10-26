import type { ExtendedModule, ModuleType } from '@tramvai/core'
import { CommonModule } from '@tramvai/module-common'
import { ErrorInterceptorModule } from '@tramvai/module-error-interceptor'
import { ServerModule } from '@tramvai/module-server'
import { ClientHintsModule } from '@tramvai/module-client-hints'

import { LocalStorageModule } from 'modules/localStorage'

import { AppRenderingModule } from './rendering'
import { AppRoutingModule } from './routing'
import { AppThemingModule } from './theming'
import { AppIntlModule } from './intl'
import { AppSeoModule } from './seo'

export const appModules: (ModuleType | ExtendedModule)[] = [
  CommonModule,
  ServerModule,
  ClientHintsModule,
  LocalStorageModule,
  AppRenderingModule,
  AppRoutingModule,
  AppThemingModule,
  AppIntlModule,
  AppSeoModule,
  ErrorInterceptorModule,
]
