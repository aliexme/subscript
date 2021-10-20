import React from 'react'

import { AsideNavMenu } from '../AsideNavMenu'

type Props = {
  className?: string
}

export const AsideMenuContent: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <div className={className}>
      <AsideNavMenu />
    </div>
  )
}
