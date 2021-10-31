import React from 'react'

import { AccountSubscriptionsDataGrid } from 'features/subscriptions'
import { Card, CardContent } from 'shared/UIKit/Card'

import { StyledAccountSubscriptionsCardHeader } from './styled'

type Props = {
  className?: string
}

export const AccountSubscriptionsCard: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <Card className={className}>
      <CardContent>
        <StyledAccountSubscriptionsCardHeader />
        <AccountSubscriptionsDataGrid />
      </CardContent>
    </Card>
  )
}
