import React from 'react'

import { OpenAsideMenuButton } from 'features/asideMenu'
import { Box } from 'shared/UIKit/Box'
import type { BoxProps } from 'shared/UIKit/Box'
import { useIsMobileScreen } from 'shared/screens'

type Props = BoxProps

export const SettingsPageHeader: React.FC<Props> = (props) => {
  const { ...boxProps } = props

  const isMobileScreen = useIsMobileScreen()

  if (!isMobileScreen) {
    return null
  }

  return (
    <Box {...boxProps}>
      <OpenAsideMenuButton wrapInPaper />
    </Box>
  )
}
