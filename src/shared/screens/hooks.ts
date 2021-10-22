import { useMemo } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Breakpoint } from '@mui/material/styles'

import { useMuiTheme } from 'shared/mui'

export const useScreenMatches = (params: {
  up?: Breakpoint | number
  down?: Breakpoint | number
  between?: [Breakpoint | number, Breakpoint | number]
  only?: Breakpoint
}): boolean => {
  const { up, down, between, only } = params
  const muiTheme = useMuiTheme()

  const mediaQuery = useMemo(() => {
    if (up) return muiTheme.breakpoints.up(up)
    if (down) return muiTheme.breakpoints.down(down)
    if (between) return muiTheme.breakpoints.between(between[0], between[1])
    if (only) return muiTheme.breakpoints.only(only)
    return muiTheme.breakpoints.up('xs')
  }, [muiTheme, up, down, between, only])

  return useMediaQuery(mediaQuery)
}
