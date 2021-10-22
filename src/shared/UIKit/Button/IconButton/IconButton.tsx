import React from 'react'
import classNames from 'classnames'
import MuiIconButton from '@mui/material/IconButton'
import type {
  IconButtonProps as MuiIconButtonProps,
  IconButtonTypeMap as MuiIconButtonTypeMap,
} from '@mui/material/IconButton'

import { Paper } from '../../Paper'
import type { PaperProps } from '../../Paper'

import styles from './IconButton.css'

export type IconButtonProps<
  C extends React.ElementType = MuiIconButtonTypeMap['defaultComponent']
> = MuiIconButtonProps<
  C,
  {
    component?: C
    shape?: 'circular' | 'rounded'
    wrapInPaper?: boolean
    PaperProps?: Partial<PaperProps>
  }
>

export const IconButton = <C extends React.ElementType>(props: React.PropsWithChildren<IconButtonProps<C>>) => {
  const { wrapInPaper, shape = 'rounded', PaperProps, className, ...muiIconButtonProps } = props

  const IconButtonBase = (
    <MuiIconButton
      centerRipple={false}
      {...muiIconButtonProps}
      className={classNames(shape === 'rounded' && styles.rounded, className)}
    />
  )

  if (wrapInPaper) {
    return (
      <Paper {...PaperProps} className={classNames(styles.paperWrapper, PaperProps?.className)}>
        {IconButtonBase}
      </Paper>
    )
  }

  return IconButtonBase
}
