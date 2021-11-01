import { createToken } from '@tinkoff/dippy'

import type { ModalSpec } from './types'

export const MODALS_TOKEN = createToken<ModalSpec | ModalSpec[]>('modalsToken', { multi: true })
