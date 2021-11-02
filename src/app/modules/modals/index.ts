import { Module, provide } from '@tramvai/core'

import { ModalsModule, MODALS_TOKEN } from 'modules/modals'
import { SubscriptionFormModal, SUBSCRIPTION_FORM_MODAL_NAME } from 'features/subscriptions'

@Module({
  imports: [ModalsModule],
  providers: [
    provide({
      provide: MODALS_TOKEN,
      multi: true,
      useValue: {
        name: SUBSCRIPTION_FORM_MODAL_NAME,
        component: SubscriptionFormModal,
      },
    }),
  ],
})
export class AppModalsModule {}
