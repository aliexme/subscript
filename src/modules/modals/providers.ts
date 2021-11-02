import { provide } from '@tramvai/core'
import { COMBINE_REDUCERS } from '@tramvai/module-common'
import { LAYOUT_OPTIONS } from '@tramvai/module-render'
import type { Provider } from '@tinkoff/dippy'

import { modalsStore } from './stores'
import { ModalsStack } from './layout'

export const commonProviders: Provider[] = [
  provide({
    provide: COMBINE_REDUCERS,
    multi: true,
    useValue: modalsStore,
  }),
  provide({
    provide: LAYOUT_OPTIONS,
    multi: true,
    useValue: [
      {
        components: {
          modalsStack: ModalsStack,
        },
      },
    ],
  }),
]
