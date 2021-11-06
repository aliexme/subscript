import React from 'react'
import { useField } from 'formik'

import { TextField } from 'shared/UIKit/TextField'

import { SubscriptionFormField } from '../form'

type Props = {
  className?: string
}

export const SubscriptionBillingPeriodCycleFormField: React.FC<Props> = (props) => {
  const { className } = props

  const [field, meta] = useField(SubscriptionFormField.BILLING_PERIOD_CYCLE)

  return (
    <TextField
      {...field}
      placeholder="1"
      type="number"
      size="small"
      error={meta.touched && !!meta.error}
      className={className}
    />
  )
}
