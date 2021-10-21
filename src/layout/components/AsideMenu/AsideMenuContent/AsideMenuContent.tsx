import React from 'react'

import { AsideMenuHeader } from '../AsideMenuHeader'
import { AsideNavMenu } from '../AsideNavMenu'

type Props = {
  className?: string
}

export const AsideMenuContent: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <div className={className}>
      <AsideMenuHeader sx={{ marginBottom: 2 }} />
      <AsideNavMenu />
    </div>
  )
}
