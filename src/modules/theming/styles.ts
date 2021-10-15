import { createCssVariable } from 'shared/utils/styles'

import type { Theme } from './theme'
import type { ThemeColors } from './colors'

const buildThemeColorsInlineStyles = (colors: ThemeColors): string => {
  const colorCssVariables = Object.entries(colors).map(([colorName, colorValue]) => {
    return createCssVariable(`${colorName}Color`, colorValue)
  })

  return colorCssVariables.join('\n\t')
}

const buildRootThemeInlineStyles = (theme: Theme, rootThemeAttribute: string, defaultThemeName: string): string => {
  const themeRootSelector = theme.name === defaultThemeName ? '' : `[${rootThemeAttribute}=${theme.name}]`
  const colorsInlineStyles = buildThemeColorsInlineStyles(theme.colors)

  return `:root${themeRootSelector} {
    ${colorsInlineStyles}
  }`
}

export const buildRootThemesInlineStyles = (
  themes: Theme[],
  rootThemeAttribute: string,
  defaultThemeName: string
): string => {
  const rootStyles = themes.map((theme) => {
    return buildRootThemeInlineStyles(theme, rootThemeAttribute, defaultThemeName)
  })

  return rootStyles.join('\n')
}
