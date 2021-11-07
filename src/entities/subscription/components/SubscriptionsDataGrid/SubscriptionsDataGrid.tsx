import React, { useMemo } from 'react'
import { useStore } from '@tramvai/state'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import type { GridColumns } from '@mui/x-data-grid'
import { useIntl } from 'react-intl'

import { activeIntlLocaleStore } from 'modules/i18n'
import { IntlTranslation } from 'shared/lib/i18n'
import type { IntlLocale } from 'shared/lib/i18n'
import { DATE_FNS_LOCALES_MAP } from 'shared/lib/date-fns'
import { DataGrid } from 'shared/UIKit/DataGrid'
import type { DataGridProps } from 'shared/UIKit/DataGrid'

import type { Subscription } from '../../model'

export type SubscriptionsDataGridProps = Partial<Omit<DataGridProps, 'rows' | 'columns'>> & {
  subscriptions: Subscription[]
}

export const SubscriptionsDataGrid: React.FC<SubscriptionsDataGridProps> = (props) => {
  const { subscriptions, ...dataGridProps } = props

  const intl = useIntl()
  const locale = useStore(activeIntlLocaleStore) as IntlLocale

  const columns = useMemo<GridColumns>(() => {
    return [
      {
        field: 'name',
        headerName: intl.formatMessage({ id: IntlTranslation.SubscriptionNameLabel }),
        flex: 2,
      },
      {
        field: 'nextPaymentDate',
        headerName: intl.formatMessage({ id: IntlTranslation.SubscriptionNextPaymentDateLabel }),
        valueGetter: ({ value }) => formatDistanceToNowStrict(value, { locale: DATE_FNS_LOCALES_MAP[locale] }),
        headerAlign: 'center',
        align: 'center',
        flex: 1,
      },
    ]
  }, [intl, locale])

  return <DataGrid rows={subscriptions} columns={columns} disableColumnMenu {...dataGridProps} />
}
