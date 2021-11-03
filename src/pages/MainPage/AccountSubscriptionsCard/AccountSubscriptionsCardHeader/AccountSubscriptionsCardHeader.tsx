import React from 'react'
import classNames from 'classnames'
import { FormattedMessage } from 'react-intl'

import { AddSubscriptionButton } from 'features/subscriptions'
import { IntlTranslation } from 'shared/lib/i18n'
import { Typography } from 'shared/UIKit/Typography'

import { StyledActionsRoot } from './styled'

import styles from './AccountSubscriptionsCardHeader.css'

type Props = {
  className?: string
}

export const AccountSubscriptionsCardHeader: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.titleRoot}>
        <Typography variant="subtitle1" component="h2">
          <FormattedMessage id={IntlTranslation.AccountSubscriptionsCardTitle} />
        </Typography>
      </div>
      <StyledActionsRoot>
        <AddSubscriptionButton />
      </StyledActionsRoot>
    </div>
  )
}
