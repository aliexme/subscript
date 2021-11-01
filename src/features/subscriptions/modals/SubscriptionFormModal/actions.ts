import { createAction } from '@tramvai/core'

import { openModalAction } from 'modules/modals'

import { SUBSCRIPTION_FORM_MODAL_NAME } from './modal'
import type { SubscriptionFormModalProps } from './SubscriptionFormModal'

export const openSubscriptionFormModalAction = createAction({
  name: 'openSubscriptionFormModalAction',
  fn: (context, props?: SubscriptionFormModalProps) => {
    context.executeAction(openModalAction, { name: SUBSCRIPTION_FORM_MODAL_NAME, props })
  },
})
