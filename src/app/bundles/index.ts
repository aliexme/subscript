import type { Bundle } from '@tramvai/core'

import { Bundles } from 'shared/lib/routing'

export const appBundles: Record<string, () => Promise<{ default: Bundle }>> = {
  [Bundles.MAIN]: () => import(/* webpackChunkName: "mainBundle" */ 'bundles/main'),
}
