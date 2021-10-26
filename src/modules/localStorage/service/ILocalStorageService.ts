import type { ObjectType } from 'shared/utils/objects'

export type LocalStorageValue = string | number | boolean | ObjectType | null

export interface ILocalStorageService {
  getItem(key: string): LocalStorageValue
  setItem(key: string, value: LocalStorageValue): void
  removeItem(key: string): void
  clear(): void
}
