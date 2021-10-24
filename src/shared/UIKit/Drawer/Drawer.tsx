import React from 'react'
import classNames from 'classnames'
import MuiDrawer from '@mui/material/Drawer'
import type { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer'

import type { Overwrite } from 'shared/utils/ts'
import { filterUndefinedObjectValues } from 'shared/utils/objects'

import styles from './Drawer.css'

export type DrawerProps = Overwrite<
  MuiDrawerProps,
  {
    borderless?: boolean
  }
>

export const Drawer: React.FC<DrawerProps> = (props) => {
  const { variant = 'temporary', keepMounted, borderless, className, ...muiDrawerProps } = props
  const additionalMuiDrawerProps: Partial<MuiDrawerProps> = filterUndefinedObjectValues({
    keepMounted: variant === 'temporary' ? keepMounted : undefined,
  })

  return (
    <MuiDrawer
      variant={variant}
      {...muiDrawerProps}
      {...additionalMuiDrawerProps}
      className={classNames(borderless && styles.borderless, className)}
    />
  )
}
