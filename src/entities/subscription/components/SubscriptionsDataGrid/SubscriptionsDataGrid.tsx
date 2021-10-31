import React, { useMemo } from 'react'
import type { GridColumns } from '@mui/x-data-grid'
import { useIntl } from 'react-intl'

import { IntlTranslation } from 'app/intl'
import { DataGrid } from 'shared/UIKit/DataGrid'
import type { DataGridProps } from 'shared/UIKit/DataGrid'

import type { Subscription } from '../../models'

export type SubscriptionsDataGridProps = Partial<Omit<DataGridProps, 'rows' | 'columns'>> & {
  subscriptions: Subscription[]
}

export const SubscriptionsDataGrid: React.FC<SubscriptionsDataGridProps> = (props) => {
  const { subscriptions, ...dataGridProps } = props

  const intl = useIntl()

  const columns = useMemo<GridColumns>(() => {
    return [
      {
        field: 'name',
        headerName: intl.formatMessage({ id: IntlTranslation.SubscriptionsDataGridNameColumnLabel }),
      },
    ]
  }, [intl])

  return <DataGrid rows={subscriptions} columns={columns} {...dataGridProps} />
}
