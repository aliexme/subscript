import { styled } from '@mui/material/styles'

import { OpenAsideNavMenuButton } from 'features/asideNavMenu'
import { TABLET_SCREEN_UP_BREAKPOINT } from 'shared/screens'

export const StyledOpenAsideNavMenuButton = styled(OpenAsideNavMenuButton)(({ theme }) => ({
  flexShrink: 0,
  marginRight: theme.spacing(2),
  [theme.breakpoints.up(TABLET_SCREEN_UP_BREAKPOINT)]: {
    marginRight: theme.spacing(3),
  },
}))
