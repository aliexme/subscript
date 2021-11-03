import React from 'react'
import { useActions } from '@tramvai/state'
import { useRoute } from '@tramvai/module-router'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import SettingsIcon from '@mui/icons-material/Settings'
import { useIntl } from 'react-intl'

import { IntlTranslation } from 'shared/lib/i18n'
import { Pages, PagesPath, RouteLink } from 'shared/lib/routing'
import { List, ListItemButton, ListItemIcon, ListItemText } from 'shared/UIKit/List'

import { closeAsideNavMenuAction } from '../../../actions'

type Props = {
  className?: string
}

export const AsideNavMenuList: React.FC<Props> = (props) => {
  const { className } = props

  const intl = useIntl()
  const route = useRoute()
  const closeAsideNavMenu = useActions(closeAsideNavMenuAction)

  return (
    <nav className={className}>
      <List disablePadding>
        <ListItemButton
          component={RouteLink}
          url={PagesPath.MAIN}
          selected={route.name === Pages.MAIN}
          onClick={closeAsideNavMenu}
        >
          <ListItemIcon>
            <AccountBalanceWalletIcon />
          </ListItemIcon>
          <ListItemText primary={intl.formatMessage({ id: IntlTranslation.AsideNavMenuSubscriptionsItem })} />
        </ListItemButton>
        <ListItemButton
          component={RouteLink}
          url={PagesPath.SETTINGS}
          selected={route.name === Pages.SETTINGS}
          onClick={closeAsideNavMenu}
          sx={{ marginTop: 0.5 }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={intl.formatMessage({ id: IntlTranslation.AsideNavMenuSettingsItem })} />
        </ListItemButton>
      </List>
    </nav>
  )
}
