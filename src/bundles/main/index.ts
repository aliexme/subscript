import { createBundle } from '@tramvai/core'
import { lazy } from '@tramvai/react'

import { Bundles } from 'bundles'
import { Pages } from 'pages'

export default createBundle({
  name: Bundles.MAIN,
  components: {
    [Pages.MAIN]: lazy(() => import('pages/MainPage')),
    [Pages.SECOND]: lazy(() => import('pages/SecondPage')),
  },
})
