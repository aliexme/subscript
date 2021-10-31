import React from 'react'

import { AccountSubscriptionsDataGrid } from 'features/subscriptions/components'
import { Card, CardContent } from 'shared/UIKit/Card'

type Props = {
  className?: string
}

export const AccountSubscriptionsListCard: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <Card className={className}>
      <CardContent>
        <AccountSubscriptionsDataGrid />
      </CardContent>
    </Card>
  )
}
