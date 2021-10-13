import { createApp } from '@tramvai/core'

import { appActions, appBundles, appModules, appName, appProviders } from 'app'

createApp({
  name: appName,
  bundles: appBundles,
  modules: appModules,
  providers: appProviders,
  actions: appActions,
})
