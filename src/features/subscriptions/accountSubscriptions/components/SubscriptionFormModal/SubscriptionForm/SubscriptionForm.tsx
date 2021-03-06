import React, { useCallback, useMemo } from 'react'
import { useActions } from '@tramvai/state'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import type { SchemaOf } from 'yup'
import { FormattedMessage, useIntl } from 'react-intl'

import { Subscription, SubscriptionBillingPeriodType } from 'entities/subscription'
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
import { SubscriptionBillingPeriodFormField } from './SubscriptionBillingPeriodFormField'

import styles from './SubscriptionForm.css'
import { SubscriptionBillingPeriodStartDateFormField } from './SubscriptionBillingPeriodStartDateFormField'

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
      [SubscriptionFormField.BILLING_PERIOD_CYCLE]: subscription?.billingPeriodCycle ?? 1,
      [SubscriptionFormField.BILLING_PERIOD_TYPE]:
        subscription?.billingPeriodType ?? SubscriptionBillingPeriodType.MONTH,
      [SubscriptionFormField.BILLING_PERIOD_START_DATE]: subscription?.billingPeriodStartDate ?? new Date(),
    }
  }, [subscription])

  const validationSchema = useMemo<SchemaOf<SubscriptionFormValues>>(() => {
    return Yup.object().shape({
      [SubscriptionFormField.NAME]: Yup.string()
        .max(128)
        .required(intl.formatMessage({ id: IntlTranslation.RequiredFormFieldMessage })),
      [SubscriptionFormField.DESCRIPTION]: Yup.string().max(1024).optional(),
      [SubscriptionFormField.BILLING_PERIOD_CYCLE]: Yup.number().min(1).optional(),
      [SubscriptionFormField.BILLING_PERIOD_TYPE]: Yup.mixed()
        .oneOf(Object.values(SubscriptionBillingPeriodType))
        .optional(),
      [SubscriptionFormField.BILLING_PERIOD_START_DATE]: Yup.date().optional(),
    })
  }, [intl])

  const onSubmit = useCallback(
    (values: SubscriptionFormValues) => {
      if (subscription) {
        const subscriptionUpdate: EntityUpdate<Subscription> = filterUndefinedObjectValues({
          id: subscription.id,
          name: values[SubscriptionFormField.NAME],
          description: values[SubscriptionFormField.DESCRIPTION],
          billingPeriodCycle: values[SubscriptionFormField.BILLING_PERIOD_CYCLE],
          billingPeriodType: values[SubscriptionFormField.BILLING_PERIOD_TYPE],
          billingPeriodStartDate: values[SubscriptionFormField.BILLING_PERIOD_START_DATE],
        })

        updateAccountSubscription(subscriptionUpdate)
      } else {
        const newSubscription = new Subscription({
          name: values[SubscriptionFormField.NAME],
          description: values[SubscriptionFormField.DESCRIPTION],
          billingPeriodCycle: values[SubscriptionFormField.BILLING_PERIOD_CYCLE],
          billingPeriodType: values[SubscriptionFormField.BILLING_PERIOD_TYPE],
          billingPeriodStartDate: values[SubscriptionFormField.BILLING_PERIOD_START_DATE],
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
          <Stack spacing={4}>
            <SubscriptionNameFormField />
            <SubscriptionDescriptionFormField />
            <SubscriptionBillingPeriodFormField />
            <SubscriptionBillingPeriodStartDateFormField />
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
