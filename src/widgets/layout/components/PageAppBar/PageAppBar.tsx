import React from 'react'

import { useScreenMatches } from 'shared/lib/screens'
import { AppBar } from 'shared/UIKit/AppBar'
import type { AppBarProps } from 'shared/UIKit/AppBar'
import { Toolbar } from 'shared/UIKit/Toolbar'
import { Typography } from 'shared/UIKit/Typography'
import { ASIDE_NAV_MENU_TEMPORARY_DOWN_BREAKPOINT } from 'shared/layout'
import type { Overwrite } from 'shared/utils/ts'

import { StyledOpenAsideNavMenuButton } from './styled'

import styles from './PageAppBar.css'

export type PageAppBarProps = Overwrite<
  AppBarProps,
  {
    title?: React.ReactNode
  }
>

export const PageAppBar: React.FC<PageAppBarProps> = (props) => {
  const { title, ...appBarProps } = props

  const isTemporaryAsideNavMenu = useScreenMatches({ down: ASIDE_NAV_MENU_TEMPORARY_DOWN_BREAKPOINT })

  return (
    <AppBar position="static" color="transparent" elevation={0} gutterBottom {...appBarProps}>
      <Toolbar disableGutters>
        {isTemporaryAsideNavMenu && <StyledOpenAsideNavMenuButton wrapInPaper />}
        <div className={styles.mainContent}>
          {title && (
            <Typography variant="h5" component="h1">
              {title}
            </Typography>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}
