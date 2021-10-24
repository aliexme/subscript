import { styled } from '@mui/material/styles'

import { TABLET_SCREEN_UP_BREAKPOINT } from 'shared/screens'

import { AsideNavMenuHeader } from '../AsideNavMenuHeader'

export const StyledAsideNavMenuHeader = styled(AsideNavMenuHeader)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up(TABLET_SCREEN_UP_BREAKPOINT)]: {
    marginBottom: theme.spacing(3),
  },
}))
