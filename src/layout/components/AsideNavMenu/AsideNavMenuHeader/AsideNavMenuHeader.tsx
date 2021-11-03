import React from 'react'
import classNames from 'classnames'

import { CloseAsideNavMenuButton } from 'features/asideNavMenu'
import { useScreenMatches } from 'shared/lib/screens'
import { Typography } from 'shared/UIKit/Typography'

import { ASIDE_NAV_MENU_TEMPORARY_DOWN_BREAKPOINT } from '../../../breakpoints'

import styles from './AsideNavMenuHeader.css'

type Props = {
  className?: string
}

export const AsideNavMenuHeader: React.FC<Props> = (props) => {
  const { className } = props

  const isTemporaryAsideNavMenu = useScreenMatches({ down: ASIDE_NAV_MENU_TEMPORARY_DOWN_BREAKPOINT })

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.mainContent}>
        <Typography variant={isTemporaryAsideNavMenu ? 'h5' : 'h6'}>Subscript</Typography>
      </div>
      {isTemporaryAsideNavMenu && <CloseAsideNavMenuButton className={styles.closeAsideNavMenuButton} />}
    </div>
  )
}
