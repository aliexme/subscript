import type { SubscriptionBillingPeriodType } from 'entities/subscription'

export enum SubscriptionFormField {
  NAME = 'NAME',
  DESCRIPTION = 'DESCRIPTION',
  BILLING_PERIOD_CYCLE = 'BILLING_PERIOD_CYCLE',
  BILLING_PERIOD_TYPE = 'BILLING_PERIOD_TYPE',
  BILLING_PERIOD_START_DATE = 'BILLING_PERIOD_START_DATE',
}

export type SubscriptionFormValues = {
  [SubscriptionFormField.NAME]: string
  [SubscriptionFormField.DESCRIPTION]?: string
  [SubscriptionFormField.BILLING_PERIOD_CYCLE]?: number
  [SubscriptionFormField.BILLING_PERIOD_TYPE]?: SubscriptionBillingPeriodType
  [SubscriptionFormField.BILLING_PERIOD_START_DATE]?: Date
}
