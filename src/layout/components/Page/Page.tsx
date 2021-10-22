import React from 'react'

import { Paper } from 'shared/UIKit/Paper'
import { MOBILE_SCREEN_UP_BREAKPOINT, TABLET_SCREEN_UP_BREAKPOINT } from 'shared/screens'

import { AsideMenu } from '../AsideMenu'

import styles from './Page.css'

export const Page: React.FC = (props) => {
  const { children } = props

  return (
    <div className={styles.root}>
      <AsideMenu />
      <Paper
        component="main"
        elevation={0}
        className={styles.mainContent}
        sx={{
          flexGrow: 1,
          padding: { [MOBILE_SCREEN_UP_BREAKPOINT]: 2, [TABLET_SCREEN_UP_BREAKPOINT]: 4 },
          bgcolor: 'background.default',
        }}
      >
        {children}
      </Paper>
    </div>
  )
}
