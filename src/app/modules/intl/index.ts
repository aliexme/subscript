import { Module, provide } from '@tramvai/core'

import { DEFAULT_INTL_LOCALE_TOKEN, IntlModule, INTL_MESSAGES_TOKEN } from 'modules/intl'

import { IntlLocale, intlMessages } from '../../intl'

@Module({
  imports: [IntlModule],
  providers: [
    provide({
      provide: INTL_MESSAGES_TOKEN,
      multi: true,
      useValue: intlMessages,
    }),
    provide({
      provide: DEFAULT_INTL_LOCALE_TOKEN,
      useValue: IntlLocale.RU,
    }),
  ],
})
export class AppIntlModule {}
