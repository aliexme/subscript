import React from 'react'

import { OpenAsideMenuButton } from 'features/asideMenu'
import { Box } from 'shared/UIKit/Box'
import type { BoxProps } from 'shared/UIKit/Box'
import { MOBILE_SCREEN_DOWN_BREAKPOINT, useScreenMatches } from 'shared/screens'

type Props = BoxProps

export const MainPageHeader: React.FC<Props> = (props) => {
  const { ...boxProps } = props

  const openAsideMenuButtonVisible = useScreenMatches({ down: MOBILE_SCREEN_DOWN_BREAKPOINT })

  if (!openAsideMenuButtonVisible) {
    return null
  }

  return <Box {...boxProps}>{openAsideMenuButtonVisible && <OpenAsideMenuButton wrapInPaper />}</Box>
}
