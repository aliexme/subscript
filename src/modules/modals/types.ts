import type React from 'react'

export type ModalComponentProps = {
  open: boolean
  onClose(): void
}

export type ModalSpec<P = {}> = {
  name: string
  component: React.ComponentType<ModalComponentProps & P>
}

export type ModalType<P = {}> = {
  name: string
  props?: P
}
