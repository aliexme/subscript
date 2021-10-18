import React from 'react'

import styles from './Page.css'

export const Page: React.FC = (props) => {
  const { children } = props

  return <div className={styles.root}>{children}</div>
}
