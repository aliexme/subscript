import React from 'react'
import MuiTypography from '@mui/material/Typography'
import type {
  TypographyProps as MuiTypographyProps,
  TypographyTypeMap as MuiTypographyTypeMap,
} from '@mui/material/Typography'

export type TypographyProps<
  C extends React.ElementType = MuiTypographyTypeMap['defaultComponent']
> = MuiTypographyProps<
  C,
  {
    component?: C
  }
>

export const Typography = <C extends React.ElementType>(props: React.PropsWithChildren<TypographyProps<C>>) => {
  const { ...muiTypographyProps } = props

  return <MuiTypography {...muiTypographyProps} />
}
