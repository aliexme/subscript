import React from 'react'
import { useActions } from '@tramvai/state'
import MenuIcon from '@mui/icons-material/Menu'

import { IconButton } from 'shared/UIKit/Button'
import type { IconButtonProps } from 'shared/UIKit/Button'
import { openAsideNavMenuAction } from 'shared/layout'

export type OpenAsideNavMenuButtonProps = IconButtonProps

export const OpenAsideNavMenuButton: React.FC<OpenAsideNavMenuButtonProps> = (props) => {
  const { ...iconButtonProps } = props

  const openAsideNavMenu = useActions(openAsideNavMenuAction)

  return (
    <IconButton {...iconButtonProps} onClick={openAsideNavMenu}>
      <MenuIcon />
    </IconButton>
  )
}
