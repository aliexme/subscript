import { commandLineListTokens, Module, provide } from '@tramvai/core'
import { STORE_TOKEN } from '@tramvai/module-common'

import { activeThemeNameReducer, DEFAULT_THEME_NAME_TOKEN, THEMES_TOKEN, ThemingModule } from 'modules/theming'
import { LOCAL_STORAGE_SERVICE_TOKEN } from 'modules/localStorage'

import { darkTheme, lightTheme, LIGHT_THEME_NAME } from '../../themes'
import { LocalStorageKey } from '../../localStorage'

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
      useValue: LIGHT_THEME_NAME,
    }),
    provide({
      provide: commandLineListTokens.customerStart,
      multi: true,
      useFactory: ({ store, localStorageService }) => {
        return () => {
          store.subscribe(activeThemeNameReducer, (newActiveThemeName) => {
            localStorageService.setItem(LocalStorageKey.THEME, newActiveThemeName)
          })
        }
      },
      deps: {
        store: STORE_TOKEN,
        localStorageService: LOCAL_STORAGE_SERVICE_TOKEN,
      },
    }),
  ],
})
export class AppThemingModule {}
