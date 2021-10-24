import { provide } from '@tramvai/core'
import type { Reducer } from '@tramvai/state'
import { COMBINE_REDUCERS } from '@tramvai/module-common'
import type { Provider } from '@tinkoff/dippy'

import { asideNavMenuOpenReducer } from 'layout'

const stores: Reducer<any>[] = [asideNavMenuOpenReducer]

export const storeProviders: Provider[] = stores.map((store) => {
  return provide({
    provide: COMBINE_REDUCERS,
    multi: true,
    useValue: store,
  })
})
