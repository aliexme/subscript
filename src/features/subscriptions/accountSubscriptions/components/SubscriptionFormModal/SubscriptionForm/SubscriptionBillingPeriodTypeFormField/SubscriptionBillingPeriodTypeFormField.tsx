import React from 'react'
import { useField } from 'formik'

import { SubscriptionBillingPeriodTypeSelect } from 'entities/subscription'

import { SubscriptionFormField } from '../form'

type Props = {
  className?: string
}

export const SubscriptionBillingPeriodTypeFormField: React.FC<Props> = (props) => {
  const { className } = props

  const [field, meta] = useField(SubscriptionFormField.BILLING_PERIOD_TYPE)

  return (
    <SubscriptionBillingPeriodTypeSelect
      {...field}
      size="small"
      fullWidth
      error={meta.touched && !!meta.error}
      className={className}
    />
  )
}
