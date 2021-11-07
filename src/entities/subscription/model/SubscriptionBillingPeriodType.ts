import type { Duration } from 'date-fns'

export enum SubscriptionBillingPeriodType {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

export const SUBSCRIPTION_BILLING_PERIOD_TYPE_TO_DATE_FNS_DURATION_KEY_MAP: Record<
  SubscriptionBillingPeriodType,
  keyof Duration
> = {
  [SubscriptionBillingPeriodType.DAY]: 'days',
  [SubscriptionBillingPeriodType.WEEK]: 'weeks',
  [SubscriptionBillingPeriodType.MONTH]: 'months',
  [SubscriptionBillingPeriodType.YEAR]: 'years',
}
