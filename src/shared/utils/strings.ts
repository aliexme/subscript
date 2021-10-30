export const generateUniqueString = (prefix = 'string'): string => {
  return `${prefix}_${Date.now()}_${Math.random()}`
}

export const camelCaseToKebabCase = (value: string): string => {
  return value.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase())
}
