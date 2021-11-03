import React from 'react'
import MuiDialog from '@mui/material/Dialog'
import type { DialogProps as MuiDialogProps } from '@mui/material/Dialog'

import { MOBILE_SCREEN_DOWN_BREAKPOINT, useScreenMatches } from 'shared/lib/screens'

export type DialogProps = MuiDialogProps

export const Dialog: React.FC<DialogProps> = (props) => {
  const { ...muiDialogProps } = props

  const isMobileScreen = useScreenMatches({ down: MOBILE_SCREEN_DOWN_BREAKPOINT })

  return <MuiDialog fullScreen={isMobileScreen} {...muiDialogProps} />
}
