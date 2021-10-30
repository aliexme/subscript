export const filterArrayItem = <T>(array: T[], item: T): T[] => {
  return array.filter((arrayItem) => arrayItem !== item)
}

export const filterArrayItems = <T>(array: T[], items: T[]): T[] => {
  return array.filter((arrayItem) => !items.includes(arrayItem))
}
