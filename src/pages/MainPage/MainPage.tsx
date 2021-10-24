import React from 'react'
import { useIntl } from 'react-intl'

import { IntlTranslation } from 'app/intl'
import { PageAppBar } from 'layout'

export const MainPage = () => {
  const intl = useIntl()

  return (
    <>
      <PageAppBar title={intl.formatMessage({ id: IntlTranslation.SubscriptionsPageTitle })} />
      <main>Main page</main>
    </>
  )
}

export default MainPage
