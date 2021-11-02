import { createEvent, createReducer } from '@tramvai/state'

import type { ModalType } from './types'

export const openModal = createEvent<ModalType>('open modal')
export const closeModal = createEvent<string>('close modal')
export const closeAllModals = createEvent('close all modals')

export const modalsStore = createReducer<ModalType[]>('modals', [])
  .on(openModal, (modals, modal) => [...modals, modal])
  .on(closeModal, (modals, modalName) => modals.filter((modal) => modal.name !== modalName))
  .on(closeAllModals, () => [])
