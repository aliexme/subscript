import { styled } from '@mui/material/styles'

import { ActiveLanguageSelect } from 'features/intl'
import type { ActiveLanguageSelectProps } from 'features/intl'
import { TABLET_SCREEN_UP_BREAKPOINT } from 'shared/screens'

export const StyledActiveLanguageSelect = styled(ActiveLanguageSelect)<ActiveLanguageSelectProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up(TABLET_SCREEN_UP_BREAKPOINT)]: {
    width: 156,
  },
}))
