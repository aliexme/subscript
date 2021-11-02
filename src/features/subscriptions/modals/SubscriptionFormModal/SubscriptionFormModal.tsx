import React from 'react'
import { FormattedMessage } from 'react-intl'

import { IntlTranslation } from 'app/intl'
import type { ModalComponentProps } from 'modules/modals'
import type { Subscription } from 'entities/subscription'
import { Dialog, DialogActions, DialogContent, DialogTitle } from 'shared/UIKit/Dialog'
import { Button } from 'shared/UIKit/Button'

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
      <DialogContent>Subscription form modal</DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={onClose}>
          <FormattedMessage id={IntlTranslation.CancelAction} />
        </Button>
      </DialogActions>
    </Dialog>
  )
}
