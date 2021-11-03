import React from 'react'
import { FormattedMessage } from 'react-intl'

import { IntlTranslation } from 'shared/lib/i18n'

import { SettingsTitle } from '../SettingsTitle'
import { StyledActiveLanguageSelect } from './styled'

type Props = {
  className?: string
}

export const LanguageSettings: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <div className={className}>
      <SettingsTitle>
        <FormattedMessage id={IntlTranslation.LanguageSettingsTitle} />
      </SettingsTitle>
      <StyledActiveLanguageSelect />
    </div>
  )
}
