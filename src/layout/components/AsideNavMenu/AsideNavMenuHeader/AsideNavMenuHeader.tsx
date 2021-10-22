import React from 'react'
import classNames from 'classnames'

import { CloseAsideNavMenuButton } from 'features/asideNavMenu'
import { Box } from 'shared/UIKit/Box'
import type { BoxProps } from 'shared/UIKit/Box'
import { Typography } from 'shared/UIKit/Typography'
import { TABLET_SCREEN_DOWN_BREAKPOINT, useScreenMatches } from 'shared/screens'

import styles from './AsideNavMenuHeader.css'

type Props = BoxProps

export const AsideNavMenuHeader: React.FC<Props> = (props) => {
  const { className, ...boxProps } = props

  const closeAsideNavMenuButtonVisible = useScreenMatches({ down: TABLET_SCREEN_DOWN_BREAKPOINT })

  return (
    <Box {...boxProps} className={classNames(styles.root, className)}>
      <div className={styles.mainContent}>
        <Typography variant="h5">Subscript</Typography>
      </div>
      {closeAsideNavMenuButtonVisible && <CloseAsideNavMenuButton className={styles.closeAsideNavMenuButton} />}
    </Box>
  )
}
