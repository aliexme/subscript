import { createToken } from '@tinkoff/dippy'

import type { ILocalStorageService } from './service/ILocalStorageService'

export const LOCAL_STORAGE_SERVICE_TOKEN = createToken<ILocalStorageService>('localStorageService')
