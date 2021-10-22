import React from 'react'

import { AsideNavMenu } from '../AsideNavMenu'
import { StyledMain, StyledRoot } from './styled'

export const Page: React.FC = (props) => {
  const { children } = props

  return (
    <StyledRoot>
      <AsideNavMenu />
      <StyledMain>{children}</StyledMain>
    </StyledRoot>
  )
}
