import { useStore } from '@tramvai/state'

import type { Subscription } from 'entities/subscription'
import { subscriptionsMapStore } from 'entities/subscription'
import { getEntitiesFromRecord } from 'shared/utils/entities'

import { accountSubscriptionIdsStore } from './stores'

export const useAccountSubscriptions = (): Subscription[] => {
  const accountSubscriptionIds = useStore(accountSubscriptionIdsStore)
  const subscriptionsMap = useStore(subscriptionsMapStore)
  return getEntitiesFromRecord(subscriptionsMap, accountSubscriptionIds)
}
