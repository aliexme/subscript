import React, { useCallback } from 'react'
import { useActions } from '@tramvai/state'
import type { GridRowParams } from '@mui/x-data-grid'

import { useAccountSubscriptions } from 'entities/account'
import { SubscriptionsDataGrid } from 'entities/subscription'
import type { SubscriptionsDataGridProps, Subscription } from 'entities/subscription'

import { openSubscriptionFormModalAction } from '../../model'

import styles from './AccountSubscriptionsDataGrid.css'

export type AccountSubscriptionsDataGridProps = Omit<SubscriptionsDataGridProps, 'subscriptions'>

export const AccountSubscriptionsDataGrid: React.FC<AccountSubscriptionsDataGridProps> = (props) => {
  const { ...subscriptionsDataGridProps } = props

  const accountSubscriptions = useAccountSubscriptions()
  const openSubscriptionFormModal = useActions(openSubscriptionFormModalAction)

  const onSubscriptionsRowClick = useCallback(
    (params: GridRowParams<Subscription>) => {
      const { row: subscription } = params
      openSubscriptionFormModal({ subscription })
    },
    [openSubscriptionFormModal]
  )

  return (
    <SubscriptionsDataGrid
      subscriptions={accountSubscriptions}
      {...subscriptionsDataGridProps}
      disableSelectionOnClick
      onRowClick={(onSubscriptionsRowClick as unknown) as AccountSubscriptionsDataGridProps['onRowClick']}
      classes={{ row: styles.row }}
    />
  )
}
