import React from 'react'

import { MOBILE_SCREEN_DOWN_BREAKPOINT, ScreenVisibility, TABLET_SCREEN_UP_BREAKPOINT } from 'shared/screens'

import { TemporaryAsideMenu } from './TemporaryAsideMenu'
import { PermanentAsideMenu } from './PermanentAsideMenu'

export type AsideMenuProps = {
  className?: string
}

export const AsideMenu: React.FC<AsideMenuProps> = (props) => {
  const { className } = props

  return (
    <>
      <ScreenVisibility down={MOBILE_SCREEN_DOWN_BREAKPOINT}>
        <TemporaryAsideMenu className={className} />
      </ScreenVisibility>
      <ScreenVisibility up={TABLET_SCREEN_UP_BREAKPOINT}>
        <PermanentAsideMenu className={className} />
      </ScreenVisibility>
    </>
  )
}
