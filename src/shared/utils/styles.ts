import { camelCaseToKebabCase } from './strings'

export const createCssVariable = (name: string, value: string | number): string => {
  const nameInKebabCase = camelCaseToKebabCase(name)
  return `--${nameInKebabCase}: ${value};`
}
