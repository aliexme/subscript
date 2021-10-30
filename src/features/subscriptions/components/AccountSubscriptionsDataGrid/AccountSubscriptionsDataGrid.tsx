import React from 'react'

import { useAccountSubscriptions } from 'entities/account/hooks'
import { SubscriptionsDataGrid } from 'entities/subscription'
import type { SubscriptionsDataGridProps } from 'entities/subscription'

export type AccountSubscriptionsDataGridProps = Omit<SubscriptionsDataGridProps, 'subscriptions'>

export const AccountSubscriptionsDataGrid: React.FC<AccountSubscriptionsDataGridProps> = (props) => {
  const { ...subscriptionsDataGridProps } = props

  const accountSubscriptions = useAccountSubscriptions()

  return <SubscriptionsDataGrid subscriptions={accountSubscriptions} {...subscriptionsDataGridProps} />
}
