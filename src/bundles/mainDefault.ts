import { createBundle } from '@tramvai/core'
import { lazy } from '@tramvai/react'
import {
  bundleServerOnlyAction,
  bundleClientOnlyAction,
} from '../actions/bundleActions'

export default createBundle({
  name: 'mainDefault',
  components: {
    // register a page component that will be used for all pages to which this bundle is attached, by default
    pageDefault: lazy(() => import('../layers/pages/MainPage')),
    // register a page component that will be used with the appropriate route settings
    'subscript/second': lazy(() => import('../layers/pages/SecondPage')),
  },
  // register actions that will be executed for all pages to which this bundle is attached
  actions: [bundleServerOnlyAction, bundleClientOnlyAction],
})
