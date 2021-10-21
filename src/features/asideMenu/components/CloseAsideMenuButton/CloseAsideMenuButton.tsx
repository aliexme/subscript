import React from 'react'
import { useActions } from '@tramvai/state'
import CloseIcon from '@mui/icons-material/Close'

import { closeAsideMenuAction } from 'layout'
import { IconButton } from 'shared/UIKit/Button'
import type { IconButtonProps } from 'shared/UIKit/Button'

export type CloseAsideMenuButtonProps = IconButtonProps

export const CloseAsideMenuButton: React.FC<CloseAsideMenuButtonProps> = (props) => {
  const { ...iconButtonProps } = props

  const closeAsideMenu = useActions(closeAsideMenuAction)

  return (
    <IconButton {...iconButtonProps} onClick={closeAsideMenu}>
      <CloseIcon />
    </IconButton>
  )
}
