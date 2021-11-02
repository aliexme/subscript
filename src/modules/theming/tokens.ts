import { createToken } from '@tinkoff/dippy'

import type { Theme } from './theme'

export const THEMES_TOKEN = createToken<Theme | Theme[]>('themes', { multi: true })

export const ROOT_THEME_ATTRIBUTE_TOKEN = createToken<string>('rootThemeAttributeToken')

export const DEFAULT_THEME_NAME_TOKEN = createToken<string>('defaultThemeNameToken')
