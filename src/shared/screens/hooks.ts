import useMediaQuery from '@mui/material/useMediaQuery'

import { useMuiTheme } from 'shared/mui'

import { DESKTOP_SCREEN_BREAKPOINT } from './breakpoints'

export const useIsMobileScreen = (): boolean => {
  const muiTheme = useMuiTheme()
  return useMediaQuery(muiTheme.breakpoints.down(DESKTOP_SCREEN_BREAKPOINT))
}

export const useIsDesktopScreen = (): boolean => {
  const muiTheme = useMuiTheme()
  return useMediaQuery(muiTheme.breakpoints.up(DESKTOP_SCREEN_BREAKPOINT))
}
