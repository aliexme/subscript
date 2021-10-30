import { createEvent, createReducer } from '@tramvai/state'

import {
  addEntityToIRecord,
  addEntitiesToIRecord,
  updateEntitiesInIRecord,
  updateEntityInIRecord,
  removeEntityFromIRecord,
  removeEntitiesFromIRecord,
} from 'shared/utils/entities'

import type { Subscription } from './models'

export type SubscriptionsMap = EntitiesRecord<Subscription>

export const addSubscriptionToMap = createEvent<Subscription>('add subscription to map')
export const addSubscriptionsToMap = createEvent<Subscription[]>('add subscriptions to map')
export const updateSubscriptionInMap = createEvent<EntityUpdate<Subscription>>('update subscription in map')
export const updateSubscriptionsInMap = createEvent<EntityUpdate<Subscription>[]>('update subscriptions in map')
export const removeSubscriptionFromMap = createEvent<EntityId>('remove subscription from map')
export const removeSubscriptionsFromMap = createEvent<EntityId[]>('remove subscriptions from map')

export const subscriptionsMapStore = createReducer<SubscriptionsMap>('subscriptionsMap', {})
  .on(addSubscriptionToMap, (state, subscription) => addEntityToIRecord(state, subscription))
  .on(addSubscriptionsToMap, (state, subscriptions) => addEntitiesToIRecord(state, subscriptions))
  .on(updateSubscriptionInMap, (state, subscriptionUpdate) => updateEntityInIRecord(state, subscriptionUpdate))
  .on(updateSubscriptionsInMap, (state, subscriptionsUpdate) => updateEntitiesInIRecord(state, subscriptionsUpdate))
  .on(removeSubscriptionFromMap, (state, subscriptionId) => removeEntityFromIRecord(state, subscriptionId))
  .on(removeSubscriptionsFromMap, (state, subscriptionIds) => removeEntitiesFromIRecord(state, subscriptionIds))

export const entitySubscriptionStores = [subscriptionsMapStore]
