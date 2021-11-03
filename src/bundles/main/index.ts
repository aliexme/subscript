import { createBundle } from '@tramvai/core'
import { lazy } from '@tramvai/react'

import { Bundles, Pages } from 'shared/lib/routing'

export default createBundle({
  name: Bundles.MAIN,
  components: {
    [Pages.MAIN]: lazy(() => import(/* webpackChunkName: "mainPage" */ 'pages/MainPage/MainPage')),
    [Pages.SETTINGS]: lazy(() => import(/* webpackChunkName: "settingsPage" */ 'pages/SettingsPage/SettingsPage')),
  },
})
