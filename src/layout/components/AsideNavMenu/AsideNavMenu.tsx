import React from 'react'
import { useStore } from '@tramvai/state'

import { useScreenMatches } from 'shared/lib/screens'

import { asideNavMenuOpenStore } from '../../../shared/layout/stores'
import { ASIDE_NAV_MENU_TEMPORARY_DOWN_BREAKPOINT } from '../../../shared/layout/breakpoints'
import { AsideNavMenuContent } from './AsideNavMenuContent'
import { StyledDrawer } from './styled'

import styles from './AsideNavMenu.css'

export type AsideNavMenuProps = {
  className?: string
}

export const AsideNavMenu: React.FC<AsideNavMenuProps> = (props) => {
  const { className } = props

  const asideNavMenuOpen = useStore(asideNavMenuOpenStore)
  const isTemporaryAsideNavMenu = useScreenMatches({ down: ASIDE_NAV_MENU_TEMPORARY_DOWN_BREAKPOINT })

  return (
    <StyledDrawer
      open={asideNavMenuOpen}
      variant={isTemporaryAsideNavMenu ? 'temporary' : 'permanent'}
      anchor={isTemporaryAsideNavMenu ? 'top' : 'left'}
      transitionDuration={300}
      keepMounted
      borderless
      SlideProps={{ appear: true }}
      PaperProps={{ elevation: 0 }}
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
