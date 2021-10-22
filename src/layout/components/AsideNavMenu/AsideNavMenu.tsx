import React from 'react'
import { useStore } from '@tramvai/state'

import { asideNavMenuOpenReducer } from 'layout'
import { TABLET_SCREEN_DOWN_BREAKPOINT, useScreenMatches } from 'shared/screens'

import { AsideNavMenuContent } from './AsideNavMenuContent'
import { StyledDrawer } from './styled'

import styles from './AsideNavMenu.css'

export type AsideNavMenuProps = {
  className?: string
}

export const AsideNavMenu: React.FC<AsideNavMenuProps> = (props) => {
  const { className } = props

  const asideNavMenuOpen = useStore(asideNavMenuOpenReducer)
  const isTemporaryDrawer = useScreenMatches({ down: TABLET_SCREEN_DOWN_BREAKPOINT })

  return (
    <StyledDrawer
      open={asideNavMenuOpen}
      variant={isTemporaryDrawer ? 'temporary' : 'permanent'}
      anchor={isTemporaryDrawer ? 'top' : 'left'}
      transitionDuration={300}
      keepMounted
      borderless
      SlideProps={{ appear: true }}
      classes={{
        docked: styles.docked,
        paperAnchorTop: styles.paperAnchorTop,
        paperAnchorDockedLeft: styles.paperAnchorDockedLeft,
      }}
      className={className}
    >
      <AsideNavMenuContent />
    </StyledDrawer>
  )
}
