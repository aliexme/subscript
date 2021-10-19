import React from 'react'

import { AsideMenu } from '../AsideMenu'

import styles from './Page.css'

export const Page: React.FC = (props) => {
  const { children } = props

  return (
    <div className={styles.root}>
      <AsideMenu />
      <main className={styles.mainContent}>{children}</main>
    </div>
  )
}
