import React from 'react'

import { DesktopScreenVisibility, MobileScreenVisibility } from 'shared/screens'

import { MobileAsideMenu } from './MobileAsideMenu'
import { DesktopAsideMenu } from './DesktopAsideMenu'

export type AsideMenuProps = {
  className?: string
}

export const AsideMenu: React.FC<AsideMenuProps> = (props) => {
  const { className } = props

  return (
    <>
      <MobileScreenVisibility>
        <MobileAsideMenu className={className} />
      </MobileScreenVisibility>
      <DesktopScreenVisibility>
        <DesktopAsideMenu className={className} />
      </DesktopScreenVisibility>
    </>
  )
}
