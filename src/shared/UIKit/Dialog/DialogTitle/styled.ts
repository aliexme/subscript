import MuiDialogTitle from '@mui/material/DialogTitle'
import { styled } from '@mui/material/styles'

import { IconButton } from '../../Button'

export const StyledMuiDialogTitle = styled(MuiDialogTitle)(() => ({
  display: 'flex',
  alignItems: 'center',
}))

export const StyledContent = styled('div')(() => ({
  flexGrow: 1,
}))

export const StyledCloseIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(-2),
}))
