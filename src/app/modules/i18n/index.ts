import { commandLineListTokens, Module, provide } from '@tramvai/core'
import { COOKIE_MANAGER_TOKEN, STORE_TOKEN } from '@tramvai/module-common'

import { activeIntlLocaleStore, DEFAULT_INTL_LOCALE_TOKEN, IntlModule, INTL_MESSAGES_TOKEN } from 'modules/i18n'
import { IntlLocale, intlMessages } from 'shared/lib/i18n'
import { CookieKey, COOKIE_DEFAULT_EXPIRES } from 'shared/lib/cookie'

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
      useFactory: ({ cookie }) => {
        const savedIntlLocale = cookie.get(CookieKey.LOCALE)
        return savedIntlLocale ?? IntlLocale.EN
      },
      deps: {
        cookie: COOKIE_MANAGER_TOKEN,
      },
    }),
    provide({
      provide: commandLineListTokens.customerStart,
      multi: true,
      useFactory: ({ store, cookie }) => {
        return () => {
          store.subscribe(activeIntlLocaleStore, (newActiveIntlLocale) => {
            cookie.set({ name: CookieKey.LOCALE, value: newActiveIntlLocale, expires: COOKIE_DEFAULT_EXPIRES })
          })
        }
      },
      deps: {
        store: STORE_TOKEN,
        cookie: COOKIE_MANAGER_TOKEN,
      },
    }),
  ],
})
export class AppIntlModule {}
