import React, { useMemo } from 'react'
import type { Breakpoint } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { useMuiTheme } from 'shared/lib/mui'

export type ScreenVisibilityProps = {
  up?: Breakpoint | number
  down?: Breakpoint | number
  between?: [Breakpoint | number, Breakpoint | number]
  only?: Breakpoint
}

export const ScreenVisibility: React.FC<ScreenVisibilityProps> = (props) => {
  const { up, down, between, only, children } = props

  const muiTheme = useMuiTheme()

  const mediaQuery = useMemo(() => {
    if (up) return muiTheme.breakpoints.up(up)
    if (down) return muiTheme.breakpoints.down(down)
    if (between) return muiTheme.breakpoints.between(between[0], between[1])
    if (only) return muiTheme.breakpoints.only(only)
    return muiTheme.breakpoints.up('xs')
  }, [muiTheme, up, down, between, only])

  const visible = useMediaQuery(mediaQuery)

  if (!visible) {
    return null
  }

  return <>{children}</>
}
