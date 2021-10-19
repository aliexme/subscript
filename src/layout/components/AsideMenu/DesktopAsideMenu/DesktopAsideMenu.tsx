import React from 'react'
import classNames from 'classnames'

import { AsideMenuContent } from '../AsideMenuContent'

import styles from './DesktopAsideMenu.css'

type Props = {
  className?: string
}

export const DesktopAsideMenu: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <aside className={classNames(styles.root, className)}>
      <AsideMenuContent />
    </aside>
  )
}
