import React from 'react'
import { useRoute } from '@tramvai/module-router'
import { useIntl } from 'react-intl'

import { IntlTranslation } from 'app/intl'
import { Pages, PagesPath } from 'pages'
import { List, ListItemButton, ListItemText } from 'shared/UIKit/List'
import { RouteLink } from 'shared/routing'

type Props = {
  className?: string
}

export const AsideMenuList: React.FC<Props> = (props) => {
  const { className } = props

  const intl = useIntl()
  const route = useRoute()

  return (
    <nav className={className}>
      <List>
        <ListItemButton component={RouteLink} url={PagesPath.MAIN} selected={route.name === Pages.MAIN}>
          <ListItemText primary={intl.formatMessage({ id: IntlTranslation.AsideMenuSubscriptionsItem })} />
        </ListItemButton>
      </List>
    </nav>
  )
}
