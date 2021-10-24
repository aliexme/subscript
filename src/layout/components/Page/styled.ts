import { styled } from '@mui/material/styles'

import { DESKTOP_SCREEN_UP_BREAKPOINT } from 'shared/screens'

export const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up(DESKTOP_SCREEN_UP_BREAKPOINT)]: {
    paddingLeft: 0,
  },
}))

export const StyledContent = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up(DESKTOP_SCREEN_UP_BREAKPOINT)]: {
    padding: theme.spacing(4),
  },
}))
