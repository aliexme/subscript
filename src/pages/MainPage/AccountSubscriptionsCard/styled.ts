import { styled } from '@mui/material/styles'

import { TABLET_SCREEN_UP_BREAKPOINT } from 'shared/lib/screens'

import { AccountSubscriptionsCardHeader } from './AccountSubscriptionsCardHeader'

export const StyledAccountSubscriptionsCardHeader = styled(AccountSubscriptionsCardHeader)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up(TABLET_SCREEN_UP_BREAKPOINT)]: {
    marginBottom: theme.spacing(3),
  },
}))
