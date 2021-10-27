import { commandLineListTokens, Module, provide } from '@tramvai/core'
import { COOKIE_MANAGER_TOKEN, STORE_TOKEN } from '@tramvai/module-common'

import { activeThemeNameReducer, DEFAULT_THEME_NAME_TOKEN, THEMES_TOKEN, ThemingModule } from 'modules/theming'

import { darkTheme, lightTheme, LIGHT_THEME_NAME } from '../../themes'
import { CookieKey } from '../../cookie'

@Module({
  imports: [ThemingModule],
  providers: [
    provide({
      provide: THEMES_TOKEN,
      useValue: lightTheme,
      multi: true,
    }),
    provide({
      provide: THEMES_TOKEN,
      useValue: darkTheme,
      multi: true,
    }),
    provide({
      provide: DEFAULT_THEME_NAME_TOKEN,
      useFactory: ({ cookie }) => {
        const savedThemeName = cookie.get(CookieKey.THEME)
        return savedThemeName ?? LIGHT_THEME_NAME
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
          store.subscribe(activeThemeNameReducer, (newActiveThemeName) => {
            cookie.set({ name: CookieKey.THEME, value: newActiveThemeName })
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
export class AppThemingModule {}
