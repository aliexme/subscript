import React, { useCallback, useMemo } from 'react'
import { useActions } from '@tramvai/state'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import type { SchemaOf } from 'yup'
import { FormattedMessage, useIntl } from 'react-intl'

import { Subscription } from 'entities/subscription'
import { IntlTranslation } from 'shared/lib/i18n'
import { DialogActions, DialogContent } from 'shared/UIKit/Dialog'
import { Button } from 'shared/UIKit/Button'

import { addSubscriptionToAccountAction } from '../../../model'
import { SubscriptionFormField } from './form'
import type { SubscriptionFormValues } from './form'
import { SubscriptionNameFormField } from './SubscriptionNameFormField/SubscriptionNameFormField'

import styles from './SubscriptionForm.css'

type Props = {
  subscription?: Subscription
  className?: string
  onCancel?(): void
}

export const SubscriptionForm: React.FC<Props> = (props) => {
  const { subscription, className, onCancel } = props

  const intl = useIntl()
  const addSubscriptionToAccount = useActions(addSubscriptionToAccountAction)

  const initialValues = useMemo<SubscriptionFormValues>(() => {
    return {
      [SubscriptionFormField.NAME]: subscription?.name ?? '',
    }
  }, [subscription])

  const validationSchema = useMemo<SchemaOf<SubscriptionFormValues>>(() => {
    return Yup.object().shape({
      [SubscriptionFormField.NAME]: Yup.string().required(
        intl.formatMessage({ id: IntlTranslation.RequiredFormFieldMessage })
      ),
    })
  }, [intl])

  const onSubmit = useCallback(
    (values: SubscriptionFormValues) => {
      const newSubscription = new Subscription({ name: values[SubscriptionFormField.NAME] })
      addSubscriptionToAccount(newSubscription)
    },
    [addSubscriptionToAccount]
  )

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className={className}>
        <DialogContent className={styles.dialogContent}>
          <SubscriptionNameFormField />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={onCancel}>
            <FormattedMessage id={IntlTranslation.CancelAction} />
          </Button>
          <Button type="submit" variant="contained">
            <FormattedMessage id={IntlTranslation.SaveAction} />
          </Button>
        </DialogActions>
      </Form>
    </Formik>
  )
}
