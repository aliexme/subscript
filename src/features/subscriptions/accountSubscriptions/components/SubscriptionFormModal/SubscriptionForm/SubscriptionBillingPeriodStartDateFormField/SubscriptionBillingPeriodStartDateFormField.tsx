import React, { useCallback } from 'react'
import { useField } from 'formik'
import { useIntl } from 'react-intl'

import { IntlTranslation } from 'shared/lib/i18n'
import { DatePicker } from 'shared/UIKit/DatePicker'

import { SubscriptionFormField } from '../form'

type Props = {
  className?: string
}

export const SubscriptionBillingPeriodStartDateFormField: React.FC<Props> = (props) => {
  const { className } = props

  const intl = useIntl()
  const [field, _meta, helpers] = useField(SubscriptionFormField.BILLING_PERIOD_START_DATE)

  const onDatePickerChange = useCallback(
    (dateValue: Date | null) => {
      helpers.setValue(dateValue)
    },
    [helpers]
  )

  return (
    <DatePicker
      {...field}
      label={intl.formatMessage({ id: IntlTranslation.SubscriptionBillingPeriodStartDateLabel })}
      onChange={onDatePickerChange}
      className={className}
    />
  )
}
