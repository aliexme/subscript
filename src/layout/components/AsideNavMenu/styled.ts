import { styled } from '@mui/material/styles'

import { Drawer } from 'shared/UIKit/Drawer'
import { DESKTOP_SCREEN_UP_BREAKPOINT } from 'shared/screens'

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    padding: theme.spacing(2),
    [theme.breakpoints.up(DESKTOP_SCREEN_UP_BREAKPOINT)]: {
      padding: theme.spacing(3),
    },
  },
}))
