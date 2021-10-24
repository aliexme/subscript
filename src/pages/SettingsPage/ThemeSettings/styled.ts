import { styled } from '@mui/material/styles'

import { SelectActiveThemeButtonGroup } from 'features/theming'
import { Typography } from 'shared/UIKit/Typography'
import { TABLET_SCREEN_UP_BREAKPOINT } from 'shared/screens'

export const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
}))

export const StyledSelectActiveThemeButtonGroup = styled(SelectActiveThemeButtonGroup)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up(TABLET_SCREEN_UP_BREAKPOINT)]: {
    width: 296,
  },
}))
