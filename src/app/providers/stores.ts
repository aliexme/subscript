import { provide } from '@tramvai/core'
import type { Reducer } from '@tramvai/state'
import { COMBINE_REDUCERS } from '@tramvai/module-common'
import type { Provider } from '@tinkoff/dippy'

import { asideNavMenuOpenStore } from 'layout'
import { entityAccountStores } from 'entities/account'
import { entitySubscriptionStores } from 'entities/subscription'

const stores: Reducer<any>[] = [asideNavMenuOpenStore, ...entityAccountStores, ...entitySubscriptionStores]

export const storeProviders: Provider[] = stores.map((store) => {
  return provide({
    provide: COMBINE_REDUCERS,
    multi: true,
    useValue: store,
  })
})
