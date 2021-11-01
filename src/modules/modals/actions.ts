import { createAction } from '@tramvai/core'

import { closeAllModals, closeModal, openModal } from './stores'
import type { ModalType } from './types'

export const openModalAction = createAction({
  name: 'openModalAction',
  fn: (context, modal: ModalType) => {
    context.dispatch(openModal(modal))
  },
})

export const closeModalAction = createAction({
  name: 'closeModalAction',
  fn: (context, modalName: string) => {
    context.dispatch(closeModal(modalName))
  },
})

export const closeAllModalsAction = createAction({
  name: 'closeAllModalsAction',
  fn: (context) => {
    context.dispatch(closeAllModals())
  },
})
