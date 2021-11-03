import { createToken } from '@tinkoff/dippy'

import type { IntlMessages } from './types'

export const INTL_MESSAGES_TOKEN = createToken<IntlMessages | IntlMessages[]>('intlMessagesToken', { multi: true })

export const DEFAULT_INTL_LOCALE_TOKEN = createToken<string>('defaultIntlLocalToken')
