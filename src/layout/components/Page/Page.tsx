import React from 'react'

import { AsideNavMenu } from '../AsideNavMenu'
import { StyledContent, StyledRoot } from './styled'

export const Page: React.FC = (props) => {
  const { children } = props

  return (
    <StyledRoot>
      <AsideNavMenu />
      <StyledContent>{children}</StyledContent>
    </StyledRoot>
  )
}
