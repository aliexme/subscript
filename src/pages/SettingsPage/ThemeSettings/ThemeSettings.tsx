import React from 'react'
import { FormattedMessage } from 'react-intl'

import { IntlTranslation } from 'shared/lib/i18n'

import { SettingsTitle } from '../SettingsTitle'
import { StyledSelectActiveThemeButtonGroup } from './styled'

type Props = {
  className?: string
}

export const ThemeSettings: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <div className={className}>
      <SettingsTitle>
        <FormattedMessage id={IntlTranslation.ThemeSettingsTitle} />
      </SettingsTitle>
      <StyledSelectActiveThemeButtonGroup />
    </div>
  )
}
