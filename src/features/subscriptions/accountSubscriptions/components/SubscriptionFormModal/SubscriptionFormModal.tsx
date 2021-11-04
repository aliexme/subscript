import React from 'react'
import { FormattedMessage } from 'react-intl'

import type { ModalComponentProps } from 'modules/modals'
import type { Subscription } from 'entities/subscription'
import { IntlTranslation } from 'shared/lib/i18n'
import { Dialog, DialogTitle } from 'shared/UIKit/Dialog'

import { SubscriptionForm } from './SubscriptionForm'

export type SubscriptionFormModalProps = {
  subscription?: Subscription
}

type Props = ModalComponentProps & SubscriptionFormModalProps

export const SubscriptionFormModal = (props: Props) => {
  const { open, subscription, onClose } = props

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle onClose={onClose}>
        {subscription ? subscription.name : <FormattedMessage id={IntlTranslation.NewSubscriptionFormModalTitle} />}
      </DialogTitle>
      <SubscriptionForm subscription={subscription} onCancel={onClose} />
    </Dialog>
  )
}
