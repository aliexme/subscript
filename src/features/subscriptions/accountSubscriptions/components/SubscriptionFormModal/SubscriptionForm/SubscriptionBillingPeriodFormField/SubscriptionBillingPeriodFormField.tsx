import React from 'react'
import { FormattedMessage } from 'react-intl'

import { IntlTranslation } from 'shared/lib/i18n'
import { Box } from 'shared/UIKit/Box'
import { Stack } from 'shared/UIKit/Stack'
import { Typography } from 'shared/UIKit/Typography'

import { SubscriptionBillingPeriodCycleFormField } from '../SubscriptionBillingPeriodCycleFormField'
import { SubscriptionBillingPeriodTypeFormField } from '../SubscriptionBillingPeriodTypeFormField'
import { StyledFormLabel } from './styled'

import styles from './SubscriptionBillingPeriodFormField.css'

type Props = {
  className?: string
}

export const SubscriptionBillingPeriodFormField: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <Box className={className}>
      <StyledFormLabel>
        <FormattedMessage id={IntlTranslation.SubscriptionBillingPeriodFormFieldLabel} />
      </StyledFormLabel>
      <Stack direction="row" spacing={2} className={styles.content}>
        <Typography>
          <FormattedMessage id={IntlTranslation.SubscriptionBillingPeriodFormFieldsPrefix} />
        </Typography>
        <SubscriptionBillingPeriodCycleFormField />
        <SubscriptionBillingPeriodTypeFormField />
      </Stack>
    </Box>
  )
}
