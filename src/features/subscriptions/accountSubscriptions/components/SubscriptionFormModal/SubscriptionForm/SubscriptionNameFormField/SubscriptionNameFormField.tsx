import React from 'react'
import { useField } from 'formik'
import { useIntl } from 'react-intl'

import { IntlTranslation } from 'shared/lib/i18n'
import { TextField } from 'shared/UIKit/TextField'

import { SubscriptionFormField } from '../form'

type Props = {
  className?: string
}

export const SubscriptionNameFormField: React.FC<Props> = (props) => {
  const { className } = props

  const intl = useIntl()
  const [field, meta] = useField(SubscriptionFormField.NAME)

  return (
    <TextField
      {...field}
      label={intl.formatMessage({ id: IntlTranslation.SubscriptionNameLabel })}
      placeholder={intl.formatMessage({ id: IntlTranslation.SubscriptionNameFormFieldPlaceholder })}
      size="small"
      error={meta.touched && !!meta.error}
      InputLabelProps={{ required: true }}
      className={className}
    />
  )
}
