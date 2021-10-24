import React from 'react'

import { AsideNavMenuList } from '../AsideNavMenuList'
import { StyledAsideNavMenuHeader } from './styled'

type Props = {
  className?: string
}

export const AsideNavMenuContent: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <div className={className}>
      <StyledAsideNavMenuHeader />
      <AsideNavMenuList />
    </div>
  )
}
