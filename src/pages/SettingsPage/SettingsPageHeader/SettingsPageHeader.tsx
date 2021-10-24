import React from 'react'

import { OpenAsideNavMenuButton } from 'features/asideNavMenu'
import { Box } from 'shared/UIKit/Box'
import type { BoxProps } from 'shared/UIKit/Box'
import { TABLET_SCREEN_DOWN_BREAKPOINT, useScreenMatches } from 'shared/screens'

type Props = BoxProps

export const SettingsPageHeader: React.FC<Props> = (props) => {
  const { ...boxProps } = props

  const openAsideNavMenuButtonVisible = useScreenMatches({ down: TABLET_SCREEN_DOWN_BREAKPOINT })

  if (!openAsideNavMenuButtonVisible) {
    return null
  }

  return <Box {...boxProps}>{openAsideNavMenuButtonVisible && <OpenAsideNavMenuButton wrapInPaper />}</Box>
}
