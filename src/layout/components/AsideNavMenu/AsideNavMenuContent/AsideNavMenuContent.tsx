import React from 'react'

import { MOBILE_SCREEN_UP_BREAKPOINT, TABLET_SCREEN_UP_BREAKPOINT } from 'shared/screens'

import { AsideNavMenuHeader } from '../AsideNavMenuHeader'
import { AsideNavMenuList } from '../AsideNavMenuList'

type Props = {
  className?: string
}

export const AsideNavMenuContent: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <div className={className}>
      <AsideNavMenuHeader
        sx={{ marginBottom: { [MOBILE_SCREEN_UP_BREAKPOINT]: 2, [TABLET_SCREEN_UP_BREAKPOINT]: 3 } }}
      />
      <AsideNavMenuList />
    </div>
  )
}
