import React, { useCallback, useMemo } from 'react'
import { useActions } from '@tramvai/state'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import type { SchemaOf } from 'yup'
import { FormattedMessage, useIntl } from 'react-intl'

import { Subscription } from 'entities/subscription'
import { IntlTranslation } from 'shared/lib/i18n'
import { DialogActions, DialogContent } from 'shared/UIKit/Dialog'
import { Stack } from 'shared/UIKit/Stack'
import { Button } from 'shared/UIKit/Button'
import { filterUndefinedObjectValues } from 'shared/utils/objects'

import { addSubscriptionToAccountAction, updateAccountSubscriptionAction } from '../../../model'
import { SubscriptionFormField } from './form'
import type { SubscriptionFormValues } from './form'
import { SubscriptionNameFormField } from './SubscriptionNameFormField'
import { SubscriptionDescriptionFormField } from './SubscriptionDescriptionFormField'

import styles from './SubscriptionForm.css'

type Props = {
  subscription?: Subscription
  className?: string
  onCancel?(): void
}

export const SubscriptionForm: React.FC<Props> = (props) => {
  const { subscription, className, onCancel } = props

  const intl = useIntl()
  const [addSubscriptionToAccount, updateAccountSubscription] = useActions([
    addSubscriptionToAccountAction,
    updateAccountSubscriptionAction,
  ] as const)

  const initialValues = useMemo<SubscriptionFormValues>(() => {
    return {
      [SubscriptionFormField.NAME]: subscription?.name ?? '',
      [SubscriptionFormField.DESCRIPTION]: subscription?.description ?? '',
    }
  }, [subscription])

  const validationSchema = useMemo<SchemaOf<SubscriptionFormValues>>(() => {
    return Yup.object().shape({
      [SubscriptionFormField.NAME]: Yup.string()
        .max(128)
        .required(intl.formatMessage({ id: IntlTranslation.RequiredFormFieldMessage })),
      [SubscriptionFormField.DESCRIPTION]: Yup.string().max(1024).optional(),
    })
  }, [intl])

  const onSubmit = useCallback(
    (values: SubscriptionFormValues) => {
      if (subscription) {
        const subscriptionUpdate: EntityUpdate<Subscription> = filterUndefinedObjectValues({
          id: subscription.id,
          name: values[SubscriptionFormField.NAME],
          description: values[SubscriptionFormField.DESCRIPTION],
        })

        updateAccountSubscription(subscriptionUpdate)
      } else {
        const newSubscription = new Subscription({
          name: values[SubscriptionFormField.NAME],
          description: values[SubscriptionFormField.DESCRIPTION],
        })

        addSubscriptionToAccount(newSubscription)
      }
    },
    [subscription, addSubscriptionToAccount, updateAccountSubscription]
  )

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className={className}>
        <DialogContent className={styles.dialogContent}>
          <Stack spacing={3}>
            <SubscriptionNameFormField />
            <SubscriptionDescriptionFormField />
          </Stack>
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
