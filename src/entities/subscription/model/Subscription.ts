import add from 'date-fns/add'
import isBefore from 'date-fns/isBefore'

import { generateEntityId } from 'shared/utils/entities'

import {
  SubscriptionBillingPeriodType,
  SUBSCRIPTION_BILLING_PERIOD_TYPE_TO_DATE_FNS_DURATION_KEY_MAP,
} from './SubscriptionBillingPeriodType'

type SubscriptionConstructorParams = Pick<Subscription, 'name' | 'description'> &
  Partial<Pick<Subscription, 'id' | 'billingPeriodCycle' | 'billingPeriodType' | 'billingPeriodStartDate'>>

export class Subscription {
  id: EntityId
  name: string
  description?: string
  billingPeriodCycle: number
  billingPeriodType: SubscriptionBillingPeriodType
  billingPeriodStartDate: Date

  constructor(params: SubscriptionConstructorParams) {
    this.id = params.id ?? generateEntityId()
    this.name = params.name
    this.description = params.description
    this.billingPeriodCycle = params.billingPeriodCycle ?? 1
    this.billingPeriodType = params.billingPeriodType ?? SubscriptionBillingPeriodType.MONTH
    this.billingPeriodStartDate = params.billingPeriodStartDate ?? new Date()
  }

  get nextPaymentDate(): Date {
    const now = new Date()
    let nextPaymentDate = this.billingPeriodStartDate

    while (isBefore(nextPaymentDate, now)) {
      nextPaymentDate = add(nextPaymentDate, {
        [SUBSCRIPTION_BILLING_PERIOD_TYPE_TO_DATE_FNS_DURATION_KEY_MAP[this.billingPeriodType]]: this
          .billingPeriodCycle,
      })
    }

    return nextPaymentDate
  }
}
