import React from 'react'

import type { TypographyProps } from 'shared/UIKit/Typography'

import { StyledTitle } from './styled'

export type SettingsTitleProps = TypographyProps

export const SettingsTitle: React.FC<SettingsTitleProps> = (props) => {
  const { gutterBottom = true, ...typographyProps } = props

  return <StyledTitle variant="h6" component="h2" gutterBottom={gutterBottom} {...typographyProps} />
}
