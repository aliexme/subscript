import { Module, provide } from '@tramvai/core'

import { DEFAULT_THEME_NAME_TOKEN, THEMES_TOKEN, ThemingModule } from 'modules/theming'

import { darkTheme, lightTheme, LIGHT_THEME_NAME } from '../../themes'

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
  ],
})
export class AppThemingModule {}
