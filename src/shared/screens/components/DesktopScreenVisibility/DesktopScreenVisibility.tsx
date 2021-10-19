import React from 'react'

import { DESKTOP_SCREEN_BREAKPOINT } from '../../breakpoints'
import { ScreenVisibility } from '../ScreenVisibility'

export const DesktopScreenVisibility: React.FC = (props) => {
  const { children } = props

  return <ScreenVisibility up={DESKTOP_SCREEN_BREAKPOINT}>{children}</ScreenVisibility>
}
