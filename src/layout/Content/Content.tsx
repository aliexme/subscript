import React from 'react'

import styles from './Content.css'

export const Content: React.FC = (props) => {
  const { children } = props

  return <div className={styles.root}>{children}</div>
}
