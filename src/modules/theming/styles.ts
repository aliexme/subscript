import { isNumber } from 'shared/utils/numbers'
import { createCssVariable } from 'shared/utils/styles'

import type { Theme } from './theme'
import type { ThemeColors } from './colors'
import type { ThemeShape } from './shape'

const buildThemeColorsInlineStyles = (colors: ThemeColors): string => {
  const colorCssVariables = Object.entries(colors).map(([colorName, colorValue]) => {
    return createCssVariable(`${colorName}Color`, colorValue)
  })

  return colorCssVariables.join('\n\t')
}

const buildThemeShapeInlineStyles = (shape: ThemeShape): string => {
  const shapeCssVariables = Object.entries(shape).map(([key, value]) => {
    const cssValue = isNumber(value) ? `${value}px` : value
    return createCssVariable(key, cssValue)
  })

  return shapeCssVariables.join('\n\t')
}

const buildRootThemeInlineStyles = (theme: Theme, rootThemeAttribute: string, defaultThemeName: string): string => {
  const themeRootSelector = theme.name === defaultThemeName ? '' : `[${rootThemeAttribute}=${theme.name}]`
  const colorsInlineStyles = buildThemeColorsInlineStyles(theme.colors)
  const shapeInlineStyles = buildThemeShapeInlineStyles(theme.shape)

  return `:root${themeRootSelector} {
    ${colorsInlineStyles}
    ${shapeInlineStyles}
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
