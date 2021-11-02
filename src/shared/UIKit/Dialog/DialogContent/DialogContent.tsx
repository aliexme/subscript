import React from 'react'
import MuiDialogContent from '@mui/material/DialogContent'
import type { DialogContentProps as MuiDialogContentProps } from '@mui/material/DialogContent'

export type DialogContentProps = MuiDialogContentProps

export const DialogContent: React.FC<DialogContentProps> = (props) => {
  const { ...muiDialogContentProps } = props

  return <MuiDialogContent {...muiDialogContentProps} />
}
