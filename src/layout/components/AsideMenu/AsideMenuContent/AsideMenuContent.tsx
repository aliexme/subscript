import React from 'react'

import { AsideMenuList } from '../AsideMenuList'

type Props = {
  className?: string
}

export const AsideMenuContent: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <div className={className}>
      <AsideMenuList />
    </div>
  )
}
