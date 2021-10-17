import React, { useMemo } from 'react'
import { useStore } from '@tramvai/state'
import { useDi } from '@tramvai/react'
import { IntlProvider } from 'react-intl'

import type { ObjectType } from 'shared/utils/objects'
import { deepMerge } from 'shared/utils/objects'

import type { IntlMessages } from './types'
import { INTL_MESSAGES_TOKEN } from './tokens'
import { activeIntlLocaleReducer } from './reducers'

export const LayoutWrapper: React.FC = (props) => {
  const { children } = props

  const intlMessages = useDi(INTL_MESSAGES_TOKEN) as IntlMessages[]
  const activeLocale = useStore(activeIntlLocaleReducer)

  const combinedIntlMessages = useMemo(() => {
    return intlMessages.reduce((combined, intlMessagesMap) => {
      return deepMerge(combined, intlMessagesMap, { clone: false })
    }, {})
  }, [intlMessages])

  return (
    <IntlProvider locale={activeLocale} messages={combinedIntlMessages[activeLocale]}>
      {children}
    </IntlProvider>
  )
}

export const layoutWrapper = <P extends ObjectType>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentType<P> => {
  return (wrappedComponentProps) => {
    return (
      <LayoutWrapper>
        <WrappedComponent {...wrappedComponentProps} />
      </LayoutWrapper>
    )
  }
}
