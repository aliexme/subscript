import React from 'react'
import { useIntl } from 'react-intl'

import { PageAppBar } from 'widgets/layout'
import { IntlTranslation } from 'shared/lib/i18n'
import { Card, CardContent } from 'shared/UIKit/Card'
import { Divider } from 'shared/UIKit/Divider'

import { LanguageSettings } from './LanguageSettings'
import { ThemeSettings } from './ThemeSettings'

export const SettingsPage = () => {
  const intl = useIntl()

  return (
    <>
      <PageAppBar title={intl.formatMessage({ id: IntlTranslation.SettingsPageTitle })} />
      <main>
        <Card>
          <CardContent>
            <LanguageSettings />
            <Divider spacing={3} />
            <ThemeSettings />
          </CardContent>
        </Card>
      </main>
    </>
  )
}

export default SettingsPage
