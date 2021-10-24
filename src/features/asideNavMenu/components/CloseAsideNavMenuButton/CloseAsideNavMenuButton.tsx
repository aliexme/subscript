import React from 'react'
import { useActions } from '@tramvai/state'
import CloseIcon from '@mui/icons-material/Close'

import { closeAsideNavMenuAction } from 'layout'
import { IconButton } from 'shared/UIKit/Button'
import type { IconButtonProps } from 'shared/UIKit/Button'

export type CloseAsideNavMenuButtonProps = IconButtonProps

export const CloseAsideNavMenuButton: React.FC<CloseAsideNavMenuButtonProps> = (props) => {
  const { ...iconButtonProps } = props

  const closeAsideNavMenu = useActions(closeAsideNavMenuAction)

  return (
    <IconButton {...iconButtonProps} onClick={closeAsideNavMenu}>
      <CloseIcon />
    </IconButton>
  )
}
