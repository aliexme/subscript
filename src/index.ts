import { createApp } from '@tramvai/core'
import { enableMapSet } from 'immer'

import { appActions, appBundles, appModules, appName, appProviders } from 'app/core'

enableMapSet()

createApp({
  name: appName,
  bundles: appBundles,
  modules: appModules,
  providers: appProviders,
  actions: appActions,
})
