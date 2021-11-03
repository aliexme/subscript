import React from 'react'
import { useIntl } from 'react-intl'

import { PageAppBar } from 'widgets/layout'
import { IntlTranslation } from 'shared/lib/i18n'

import { AccountSubscriptionsCard } from './AccountSubscriptionsCard'

export const MainPage = () => {
  const intl = useIntl()

  return (
    <>
      <PageAppBar title={intl.formatMessage({ id: IntlTranslation.SubscriptionsPageTitle })} />
      <main>
        <AccountSubscriptionsCard />
      </main>
    </>
  )
}

export default MainPage
