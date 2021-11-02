import React from 'react'
import MuiDialogContentText from '@mui/material/DialogContentText'
import type {
  DialogContentTextProps as MuiDialogContentTextProps,
  DialogContentTextTypeMap as MuiDialogContentTextTypeMap,
} from '@mui/material/DialogContentText'

export type DialogContentTextProps<
  C extends React.ElementType = MuiDialogContentTextTypeMap['defaultComponent']
> = MuiDialogContentTextProps<
  C,
  {
    component?: C
  }
>

export const DialogContentText = <C extends React.ElementType>(
  props: React.PropsWithChildren<DialogContentTextProps<C>>
) => {
  const { ...muiDialogContentTextProps } = props

  return <MuiDialogContentText {...muiDialogContentTextProps} />
}
