import React from 'react'
import classNames from 'classnames'
import { styled } from '@mui/material/styles'
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

const StyledMuiIconButton = styled(MuiIconButton)<IconButtonProps<any>>((props) => {
  const { theme, shape = 'rounded' } = props

  return {
    ...(shape === 'rounded' && {
      borderRadius: theme.shape.borderRadius,
    }),
  }
})

export const IconButton = <C extends React.ElementType>(props: React.PropsWithChildren<IconButtonProps<C>>) => {
  const { wrapInPaper, PaperProps: IconButtonPaperProps, ...muiIconButtonProps } = props
  const IconButtonBase = <StyledMuiIconButton centerRipple={false} {...muiIconButtonProps} />

  if (wrapInPaper) {
    return (
      <Paper {...IconButtonPaperProps} className={classNames(styles.paper, IconButtonPaperProps?.className)}>
        {IconButtonBase}
      </Paper>
    )
  }

  return IconButtonBase
}
