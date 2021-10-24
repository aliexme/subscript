import React from 'react'
import classNames from 'classnames'
import type {
  IconButtonProps as MuiIconButtonProps,
  IconButtonTypeMap as MuiIconButtonTypeMap,
} from '@mui/material/IconButton'

import { Paper } from '../../Paper'
import type { PaperProps } from '../../Paper'
import { StyledIconButton } from './styled'
import type { StyledIconButtonProps } from './styled'

import styles from './IconButton.css'

export type IconButtonProps<
  C extends React.ElementType = MuiIconButtonTypeMap['defaultComponent']
> = MuiIconButtonProps<
  C,
  StyledIconButtonProps & {
    component?: C
    wrapInPaper?: boolean
    PaperProps?: Partial<PaperProps>
  }
>

export const IconButton = <C extends React.ElementType>(props: React.PropsWithChildren<IconButtonProps<C>>) => {
  const { wrapInPaper, PaperProps, className, ...muiIconButtonProps } = props

  const IconButtonBase = (
    <StyledIconButton centerRipple={false} {...muiIconButtonProps} className={classNames(!wrapInPaper && className)} />
  )

  if (wrapInPaper) {
    return (
      <Paper
        {...PaperProps}
        className={classNames(wrapInPaper && className, styles.paperWrapper, PaperProps?.className)}
      >
        {IconButtonBase}
      </Paper>
    )
  }

  return IconButtonBase
}
