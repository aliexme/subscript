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
      size="small"
      fullWidth
      error={!!meta.error}
      helperText={meta.error}
      className={className}
    />
  )
}
