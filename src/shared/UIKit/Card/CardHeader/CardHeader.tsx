import React from 'react'
import MuiCardHeader from '@mui/material/CardHeader'
import type {
  CardHeaderProps as MuiCardHeaderProps,
  CardHeaderTypeMap as MuiCardHeaderTypeMap,
} from '@mui/material/CardHeader'

export type CardHeaderProps<
  DefaultComponent extends React.ElementType = MuiCardHeaderTypeMap['defaultComponent'],
  TitleTypographyComponent extends React.ElementType = 'span',
  SubheaderTypographyComponent extends React.ElementType = 'span'
> = MuiCardHeaderProps<DefaultComponent, {}, TitleTypographyComponent, SubheaderTypographyComponent>

export const CardHeader = <
  DefaultComponent extends React.ElementType,
  TitleTypographyComponent extends React.ElementType,
  SubheaderTypographyComponent extends React.ElementType
>(
  props: React.PropsWithChildren<
    CardHeaderProps<DefaultComponent, TitleTypographyComponent, SubheaderTypographyComponent>
  >
) => {
  const { ...muiCardHeaderProps } = props

  return <MuiCardHeader {...muiCardHeaderProps} />
}
