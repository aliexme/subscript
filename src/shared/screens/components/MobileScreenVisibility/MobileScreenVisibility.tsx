import React from 'react'

import { DESKTOP_SCREEN_BREAKPOINT } from '../../breakpoints'
import { ScreenVisibility } from '../ScreenVisibility'

export const MobileScreenVisibility: React.FC = (props) => {
  const { children } = props

  return <ScreenVisibility down={DESKTOP_SCREEN_BREAKPOINT}>{children}</ScreenVisibility>
}
