import React from 'react'
import classNames from 'classnames'

import { CloseAsideMenuButton } from 'features/asideMenu'
import { Box } from 'shared/UIKit/Box'
import type { BoxProps } from 'shared/UIKit/Box'
import { useIsMobileScreen } from 'shared/screens'

import styles from './AsideMenuHeader.css'

type Props = BoxProps

export const AsideMenuHeader: React.FC<Props> = (props) => {
  const { className, ...boxProps } = props

  const isMobileScreen = useIsMobileScreen()

  if (!isMobileScreen) {
    return null
  }

  return (
    <Box {...boxProps} className={classNames(styles.root, className)}>
      <CloseAsideMenuButton />
    </Box>
  )
}
