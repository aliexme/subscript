import React, { useCallback, useMemo } from 'react'
import { useActions } from '@tramvai/state'
import { useDi } from '@tramvai/react'

import { MODALS_TOKEN } from '../../../tokens'
import { closeModalAction } from '../../../actions'
import type { ModalSpec, ModalType } from '../../../types'

export type ModalRendererProps = {
  modal: ModalType
  open: boolean
}

export const ModalRenderer = (props: ModalRendererProps) => {
  const { modal, open } = props

  const modalSpecs = (useDi({ token: MODALS_TOKEN, optional: true }) as ModalSpec[]) ?? []
  const closeModal = useActions(closeModalAction)

  const modalSpec = useMemo(() => {
    return modalSpecs.find((spec) => spec.name === modal.name)
  }, [modal.name]) // eslint-disable-line react-hooks/exhaustive-deps

  const onModalClose = useCallback(() => {
    closeModal(modal.name)
  }, [modal.name, closeModal])

  if (!modalSpec) {
    throw new Error(`Could not find the modal instance for ${modal.name}`)
  }

  const ModalComponent = modalSpec.component

  return <ModalComponent {...modal.props} open={open} onClose={onModalClose} />
}
