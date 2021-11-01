import React from 'react'
import MuiDialogActions from '@mui/material/DialogActions'
import type { DialogActionsProps as MuiDialogActionsProps } from '@mui/material/DialogActions'

export type DialogActionsProps = MuiDialogActionsProps

export const DialogActions: React.FC<DialogActionsProps> = (props) => {
  const { ...muiDialogActionsProps } = props

  return <MuiDialogActions {...muiDialogActionsProps} />
}
