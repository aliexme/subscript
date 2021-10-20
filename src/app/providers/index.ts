import type { Provider } from '@tinkoff/dippy'

import { storeProviders } from './stores'

export const appProviders: Provider[] = [...storeProviders]
