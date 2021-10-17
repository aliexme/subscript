import type { Overwrite } from './ts'

export type ObjectType = Record<string, any>

export const isPlainObject = (value: unknown): value is ObjectType => {
  return typeof value === 'object' && value !== null && value.constructor === Object
}

export const deepMerge = <T extends ObjectType, S extends ObjectType>(
  target: T,
  source: S,
  options: {
    clone?: boolean
  } = {
    clone: true,
  }
): Overwrite<T, S> => {
  const result: ObjectType = options.clone ? { ...target } : target

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        result[key] = deepMerge(target[key], source[key], options)
      } else {
        result[key] = source[key]
      }
    })
  }

  return result as Overwrite<T, S>
}
