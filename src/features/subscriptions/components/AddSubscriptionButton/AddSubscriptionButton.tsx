import React, { useCallback } from 'react'
import { useActions } from '@tramvai/state'
import AddIcon from '@mui/icons-material/Add'
import { FormattedMessage } from 'react-intl'

import { openSubscriptionFormModalAction } from 'features/subscriptions'
import { IntlTranslation } from 'shared/lib/i18n'
import { Button } from 'shared/UIKit/Button'
import type { ButtonProps } from 'shared/UIKit/Button'

export type AddSubscriptionButtonProps = ButtonProps

export const AddSubscriptionButton: React.FC<AddSubscriptionButtonProps> = (props) => {
  const { ...buttonProps } = props

  const openSubscriptionFormModal = useActions(openSubscriptionFormModalAction)

  const handleOpenSubscriptionFormModal = useCallback(() => {
    openSubscriptionFormModal()
  }, [openSubscriptionFormModal])

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      {...buttonProps}
      onClick={handleOpenSubscriptionFormModal}
    >
      <FormattedMessage id={IntlTranslation.AddSubscriptionButtonLabel} />
    </Button>
  )
}
