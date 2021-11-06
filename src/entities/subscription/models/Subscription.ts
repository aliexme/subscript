import type { PartialProp } from 'shared/utils/ts'
import { generateEntityId } from 'shared/utils/entities'

type SubscriptionConstructorParams = PartialProp<Subscription, 'id'>

export class Subscription {
  id: EntityId
  name: string
  description?: string

  constructor(params: SubscriptionConstructorParams) {
    this.id = params.id ?? generateEntityId()
    this.name = params.name
    this.description = params.description
  }
}
