import React from 'react'
import { useIntl } from 'react-intl'

import { IntlTranslation } from 'app/intl'
import { PageAppBar } from 'layout'

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
