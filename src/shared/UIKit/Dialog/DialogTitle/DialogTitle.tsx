import React from 'react'
import type { DialogTitleProps as MuiDialogTitleProps } from '@mui/material/DialogTitle'
import CloseIcon from '@mui/icons-material/Close'

import { StyledCloseIconButton, StyledContent, StyledMuiDialogTitle } from './styled'

export type DialogTitleProps = MuiDialogTitleProps & {
  onClose?(): void
}

export const DialogTitle: React.FC<DialogTitleProps> = (props) => {
  const { onClose, children, ...muiDialogTitleProps } = props

  return (
    <StyledMuiDialogTitle {...muiDialogTitleProps}>
      <StyledContent>{children}</StyledContent>
      {onClose && (
        <StyledCloseIconButton onClick={onClose}>
          <CloseIcon />
        </StyledCloseIconButton>
      )}
    </StyledMuiDialogTitle>
  )
}
