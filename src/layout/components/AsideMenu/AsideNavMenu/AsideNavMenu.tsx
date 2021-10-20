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

export const AsideNavMenu: React.FC<Props> = (props) => {
  const { className } = props

  const intl = useIntl()
  const route = useRoute()

  return (
    <nav className={className}>
      <List disablePadding>
        <ListItemButton component={RouteLink} url={PagesPath.MAIN} selected={route.name === Pages.MAIN}>
          <ListItemText primary={intl.formatMessage({ id: IntlTranslation.AsideMenuNavSubscriptionsItem })} />
        </ListItemButton>
        <ListItemButton
          component={RouteLink}
          url={PagesPath.SETTINGS}
          selected={route.name === Pages.SETTINGS}
          sx={{ marginTop: 0.5 }}
        >
          <ListItemText primary={intl.formatMessage({ id: IntlTranslation.AsideMenuNavSettingsItem })} />
        </ListItemButton>
      </List>
    </nav>
  )
}
