import { createEvent, createReducer } from '@tramvai/state'

import { filterArrayItem, filterArrayItems } from 'shared/utils/arrays'

export const setAccountSubscriptionIds = createEvent<EntityId[]>('set account subscription ids')
export const addAccountSubscriptionId = createEvent<EntityId>('add account subscription id')
export const addAccountSubscriptionIds = createEvent<EntityId[]>('add account subscription ids')
export const removeAccountSubscriptionId = createEvent<EntityId>('remove account subscription id')
export const removeAccountSubscriptionIds = createEvent<EntityId[]>('remove account subscription ids')

export const accountSubscriptionIdsStore = createReducer<EntityId[]>('accountSubscriptionIds', [])
  .on(setAccountSubscriptionIds, (_state, subscriptionIds) => subscriptionIds)
  .on(addAccountSubscriptionId, (state, subscriptionId) => [...state, subscriptionId])
  .on(addAccountSubscriptionIds, (state, subscriptionIds) => [...state, ...subscriptionIds])
  .on(removeAccountSubscriptionId, (state, subscriptionId) => filterArrayItem(state, subscriptionId))
  .on(removeAccountSubscriptionIds, (state, subscriptionIds) => filterArrayItems(state, subscriptionIds))

export const entityAccountStores = [accountSubscriptionIdsStore]
