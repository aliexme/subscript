import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { FormattedMessage } from 'react-intl'

import { IntlTranslation } from 'app/intl'
import { Button } from 'shared/UIKit/Button'
import type { ButtonProps } from 'shared/UIKit/Button'

export type AddSubscriptionButtonProps = ButtonProps

export const AddSubscriptionButton: React.FC<AddSubscriptionButtonProps> = (props) => {
  const { ...buttonProps } = props

  return (
    <Button variant="contained" color="primary" startIcon={<AddIcon />} {...buttonProps}>
      <FormattedMessage id={IntlTranslation.AddSubscriptionButtonLabel} />
    </Button>
  )
}
