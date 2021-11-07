import React from 'react'
import { FormattedMessage } from 'react-intl'

import { IntlTranslation } from 'shared/lib/i18n'
import { TextField } from 'shared/UIKit/TextField'
import type { TextFieldProps } from 'shared/UIKit/TextField'
import { MenuItem } from 'shared/UIKit/Menu'

import { SubscriptionBillingPeriodType } from '../../model'

export type SubscriptionBillingPeriodTypeSelectProps = TextFieldProps

export const SubscriptionBillingPeriodTypeSelect: React.FC<SubscriptionBillingPeriodTypeSelectProps> = (props) => {
  const { ...textFieldProps } = props

  return (
    <TextField {...textFieldProps} select>
      <MenuItem value={SubscriptionBillingPeriodType.DAY}>
        <FormattedMessage id={IntlTranslation.SubscriptionBillingPeriodTypeDay} />
      </MenuItem>
      <MenuItem value={SubscriptionBillingPeriodType.WEEK}>
        <FormattedMessage id={IntlTranslation.SubscriptionBillingPeriodTypeWeek} />
      </MenuItem>
      <MenuItem value={SubscriptionBillingPeriodType.MONTH}>
        <FormattedMessage id={IntlTranslation.SubscriptionBillingPeriodTypeMonth} />
      </MenuItem>
      <MenuItem value={SubscriptionBillingPeriodType.YEAR}>
        <FormattedMessage id={IntlTranslation.SubscriptionBillingPeriodTypeYear} />
      </MenuItem>
    </TextField>
  )
}
