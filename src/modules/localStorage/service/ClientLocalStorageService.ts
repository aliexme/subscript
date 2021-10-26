import type { Logger } from '@tinkoff/logger'

import type { ILocalStorageService, LocalStorageValue } from './ILocalStorageService'

export class ClientLocalStorageService implements ILocalStorageService {
  private logger: Logger

  constructor({ logger }: { logger: Logger }) {
    this.logger = logger
  }

  getItem(key: string) {
    try {
      const value = localStorage.getItem(key)
      return value && JSON.parse(value)
    } catch (error: any) {
      this.logger.error(error, 'ClientLocalStorageService getItem')
      return null
    }
  }

  setItem(key: string, value: LocalStorageValue) {
    try {
      const stringifiedValue = JSON.stringify(value)
      localStorage.setItem(key, stringifiedValue)
    } catch (error: any) {
      this.logger.error(error, 'ClientLocalStorageService setItem')
    }
  }

  removeItem(key: string) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}
