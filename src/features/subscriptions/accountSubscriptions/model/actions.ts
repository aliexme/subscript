import { createAction } from '@tramvai/core'

import { closeModal, openModalAction } from 'modules/modals'
import { addAccountSubscriptionId } from 'entities/account'
import { addSubscriptionToMap, updateSubscriptionInMap } from 'entities/subscription'
import type { Subscription } from 'entities/subscription'

import { SUBSCRIPTION_FORM_MODAL_NAME } from './modals'
import type { SubscriptionFormModalProps } from '../components/SubscriptionFormModal'

export const openSubscriptionFormModalAction = createAction({
  name: 'openSubscriptionFormModalAction',
  fn: (context, props?: SubscriptionFormModalProps) => {
    context.executeAction(openModalAction, { name: SUBSCRIPTION_FORM_MODAL_NAME, props })
  },
})

export const addSubscriptionToAccountAction = createAction({
  name: 'addSubscriptionToAccountAction',
  fn: (context, subscription: Subscription) => {
    context.dispatch(addSubscriptionToMap(subscription))
    context.dispatch(addAccountSubscriptionId(subscription.id))
    context.dispatch(closeModal(SUBSCRIPTION_FORM_MODAL_NAME))
  },
})

export const updateAccountSubscriptionAction = createAction({
  name: 'updateAccountSubscriptionAction',
  fn: (context, subscriptionUpdate: EntityUpdate<Subscription>) => {
    context.dispatch(updateSubscriptionInMap(subscriptionUpdate))
    context.dispatch(closeModal(SUBSCRIPTION_FORM_MODAL_NAME))
  },
})
