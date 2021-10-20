import { createAction } from '@tramvai/core'

import { ROOT_THEME_ATTRIBUTE_TOKEN } from './tokens'
import { setActiveThemeName } from './stores'

export const setHTMLThemeAttributeAction = createAction({
  name: 'setHTMLThemeAttributeAction',
  fn: (_context, themeName: string, { rootThemeAttribute }) => {
    document.documentElement.setAttribute(rootThemeAttribute, themeName)
  },
  deps: {
    rootThemeAttribute: ROOT_THEME_ATTRIBUTE_TOKEN,
  },
  conditions: {
    onlyBrowser: true,
  },
})

export const setActiveThemeNameAction = createAction({
  name: 'setActiveThemeNameAction',
  fn: (context, themeName: string) => {
    context.dispatch(setActiveThemeName(themeName))
    context.executeAction(setHTMLThemeAttributeAction, themeName)
  },
})
