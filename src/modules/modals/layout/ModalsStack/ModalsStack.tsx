import React from 'react'
import { useStore } from '@tramvai/state'

import { usePrevious } from 'shared/utils/react'

import { modalsStore } from '../../stores'
import { ModalRenderer } from './ModalRenderer'

export const ModalsStack = () => {
  const modals = useStore(modalsStore)
  const prevModals = usePrevious(modals)
  const closingModals = prevModals.filter((prevModal) => !modals.some((modal) => modal.name === prevModal.name))
  const totalModals = [...closingModals, ...modals]

  return (
    <>
      {totalModals.map((modal) => {
        const open = modals.some((activeModal) => activeModal.name === modal.name)
        return <ModalRenderer key={modal.name} modal={modal} open={open} />
      })}
    </>
  )
}
