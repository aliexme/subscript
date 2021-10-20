import React from 'react'
import { useStore } from '@tramvai/state'

import { asideMenuOpenReducer } from 'layout'
import { Drawer } from 'shared/UIKit/Drawer'

import { AsideMenuContent } from '../AsideMenuContent'

import styles from './MobileAsideMenu.css'

type Props = {
  className?: string
}

export const MobileAsideMenu: React.FC<Props> = (props) => {
  const { className } = props

  const asideMenuOpen = useStore(asideMenuOpenReducer)

  return (
    <Drawer
      open={asideMenuOpen}
      anchor="top"
      keepMounted
      transitionDuration={300}
      SlideProps={{ appear: true }}
      classes={{ paperAnchorTop: styles.paperAnchorTop }}
      className={className}
    >
      <AsideMenuContent className={styles.content} />
    </Drawer>
  )
}
