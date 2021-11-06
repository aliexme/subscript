import type { PartialProp } from 'shared/utils/ts'
import { generateEntityId } from 'shared/utils/entities'

export enum SubscriptionBillingPeriodType {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

type SubscriptionConstructorParams = PartialProp<Subscription, 'id' | 'billingPeriodCycle' | 'billingPeriodType'>

export class Subscription {
  id: EntityId
  name: string
  description?: string
  billingPeriodCycle: number
  billingPeriodType: SubscriptionBillingPeriodType

  constructor(params: SubscriptionConstructorParams) {
    this.id = params.id ?? generateEntityId()
    this.name = params.name
    this.description = params.description
    this.billingPeriodCycle = params.billingPeriodCycle ?? 1
    this.billingPeriodType = params.billingPeriodType ?? SubscriptionBillingPeriodType.MONTH
  }
}
