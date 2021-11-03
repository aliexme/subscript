import { styled } from '@mui/material/styles'

import { ActiveLanguageSelect } from 'features/i18n'
import type { ActiveLanguageSelectProps } from 'features/i18n'
import { TABLET_SCREEN_UP_BREAKPOINT } from 'shared/lib/screens'

export const StyledActiveLanguageSelect = styled(ActiveLanguageSelect)<ActiveLanguageSelectProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up(TABLET_SCREEN_UP_BREAKPOINT)]: {
    width: 156,
  },
}))
