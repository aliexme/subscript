import React from 'react'
import { useField } from 'formik'
import { useIntl } from 'react-intl'

import { IntlTranslation } from 'shared/lib/i18n'
import { TextField } from 'shared/UIKit/TextField'

import { SubscriptionFormField } from '../form'

type Props = {
  className?: string
}

export const SubscriptionDescriptionFormField: React.FC<Props> = (props) => {
  const { className } = props

  const intl = useIntl()
  const [field, meta] = useField(SubscriptionFormField.DESCRIPTION)

  return (
    <TextField
      {...field}
      label={intl.formatMessage({ id: IntlTranslation.SubscriptionDescriptionLabel })}
      size="small"
      multiline
      minRows={3}
      error={!!meta.error}
      helperText={meta.error}
      className={className}
    />
  )
}
