import React from 'react'
import { useActions } from '@tramvai/state'
import MenuIcon from '@mui/icons-material/Menu'

import { openAsideMenuAction } from 'layout'
import { IconButton } from 'shared/UIKit/Button'
import type { IconButtonProps } from 'shared/UIKit/Button'

export type OpenAsideMenuButtonProps = IconButtonProps

export const OpenAsideMenuButton: React.FC<OpenAsideMenuButtonProps> = (props) => {
  const { ...iconButtonProps } = props

  const openAsideMenu = useActions(openAsideMenuAction)

  return (
    <IconButton {...iconButtonProps} onClick={openAsideMenu}>
      <MenuIcon />
    </IconButton>
  )
}
