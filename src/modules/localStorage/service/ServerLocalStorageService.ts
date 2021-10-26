import type { ILocalStorageService } from './ILocalStorageService'

export class ServerLocalStorageService implements ILocalStorageService {
  getItem() {
    return null
  }

  setItem() {
    /* noop */
  }

  removeItem() {
    /* noop */
  }

  clear() {
    /* noop */
  }
}
