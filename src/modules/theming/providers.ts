import { commandLineListTokens, provide } from '@tramvai/core'
import { ACTION_EXECUTION_TOKEN, COMBINE_REDUCERS, STORE_TOKEN } from '@tramvai/module-common'
import type { HtmlAttrs } from '@tramvai/module-render'
import { HTML_ATTRS, RENDER_SLOTS, ResourceSlot, ResourceType } from '@tramvai/module-render'
import type { Provider } from '@tinkoff/dippy'

import type { Theme } from './theme'
import { DEFAULT_THEME_NAME_TOKEN, ROOT_THEME_ATTRIBUTE_TOKEN, THEMES_TOKEN } from './tokens'
import { activeThemeNameReducer } from './stores'
import { setActiveThemeNameAction } from './actions'
import { defaultTheme, DEFAULT_THEME_NAME } from './themes'
import { buildRootThemesInlineStyles } from './styles'

export const commonProviders: Provider[] = [
  provide({
    provide: THEMES_TOKEN,
    useValue: defaultTheme,
    multi: true,
  }),
  provide({
    provide: ROOT_THEME_ATTRIBUTE_TOKEN,
    useValue: 'data-theme',
  }),
  provide({
    provide: DEFAULT_THEME_NAME_TOKEN,
    useValue: DEFAULT_THEME_NAME,
  }),
  provide({
    provide: COMBINE_REDUCERS,
    multi: true,
    useValue: activeThemeNameReducer,
  }),
  provide({
    provide: HTML_ATTRS,
    multi: true,
    useFactory: ({ store, rootThemeAttribute }): HtmlAttrs => {
      const activeThemeName = store.getState(activeThemeNameReducer)

      return {
        target: 'html',
        attrs: {
          [rootThemeAttribute]: activeThemeName,
        },
      }
    },
    deps: {
      store: STORE_TOKEN,
      rootThemeAttribute: ROOT_THEME_ATTRIBUTE_TOKEN,
    },
  }),
  provide({
    provide: RENDER_SLOTS,
    multi: true,
    useFactory: ({ themes, rootThemeAttribute }) => {
      return {
        type: ResourceType.inlineStyle,
        slot: ResourceSlot.HEAD_CORE_STYLES,
        payload: buildRootThemesInlineStyles(themes as Theme[], rootThemeAttribute, DEFAULT_THEME_NAME),
      }
    },
    deps: {
      themes: THEMES_TOKEN,
      rootThemeAttribute: ROOT_THEME_ATTRIBUTE_TOKEN,
    },
  }),
  provide({
    provide: commandLineListTokens.customerStart,
    multi: true,
    useFactory: ({ actionExecution, defaultThemeName }) => {
      return () => {
        actionExecution.run(setActiveThemeNameAction, defaultThemeName)
      }
    },
    deps: {
      actionExecution: ACTION_EXECUTION_TOKEN,
      defaultThemeName: DEFAULT_THEME_NAME_TOKEN,
    },
  }),
]
