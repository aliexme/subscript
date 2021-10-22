import React from 'react'

import { MOBILE_SCREEN_UP_BREAKPOINT, TABLET_SCREEN_UP_BREAKPOINT } from 'shared/screens'

import { AsideMenuHeader } from '../AsideMenuHeader'
import { AsideNavMenu } from '../AsideNavMenu'

type Props = {
  className?: string
}

export const AsideMenuContent: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <div className={className}>
      <AsideMenuHeader sx={{ marginBottom: { [MOBILE_SCREEN_UP_BREAKPOINT]: 2, [TABLET_SCREEN_UP_BREAKPOINT]: 3 } }} />
      <AsideNavMenu />
    </div>
  )
}
