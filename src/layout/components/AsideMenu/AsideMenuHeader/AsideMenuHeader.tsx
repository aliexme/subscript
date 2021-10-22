import React from 'react'
import classNames from 'classnames'

import { CloseAsideMenuButton } from 'features/asideMenu'
import { Box } from 'shared/UIKit/Box'
import type { BoxProps } from 'shared/UIKit/Box'
import { Typography } from 'shared/UIKit/Typography'
import { MOBILE_SCREEN_DOWN_BREAKPOINT, useScreenMatches } from 'shared/screens'

import styles from './AsideMenuHeader.css'

type Props = BoxProps

export const AsideMenuHeader: React.FC<Props> = (props) => {
  const { className, ...boxProps } = props

  const closeAsideMenuButtonVisible = useScreenMatches({ down: MOBILE_SCREEN_DOWN_BREAKPOINT })

  return (
    <Box {...boxProps} className={classNames(styles.root, className)}>
      <Box className={styles.mainContent}>
        <Typography variant="h5">Subscript</Typography>
      </Box>
      {closeAsideMenuButtonVisible && <CloseAsideMenuButton className={styles.closeAsideMenuButton} />}
    </Box>
  )
}
