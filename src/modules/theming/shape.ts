import { filterUndefinedObjectValues } from 'shared/utils/objects'

export type ThemeShape = {
  borderRadius: number | string
}

export type ThemeShapeOptions = Partial<ThemeShape>

const DEFAULT_THEME_SHAPE: ThemeShape = {
  borderRadius: 4,
}

export const createThemeShape = (shape: ThemeShapeOptions = {}): ThemeShape => {
  return {
    ...DEFAULT_THEME_SHAPE,
    ...filterUndefinedObjectValues(shape),
  }
}
