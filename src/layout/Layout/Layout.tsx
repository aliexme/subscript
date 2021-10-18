import React from 'react'

import styles from './Layout.css'

export const Layout: React.FC = (props) => {
  const { children } = props

  return <div className={styles.root}>{children}</div>
}
